/**
 * Ironveil Press — private public-playtest feedback ledger.
 *
 * One-time setup:
 * 1. Create or open a Google Apps Script project.
 * 2. Paste this file into Code.gs.
 * 3. Run setupFeedbackLedger() once and authorize it.
 * 4. In Project Settings > Script properties, confirm FEEDBACK_SPREADSHEET_ID.
 * 5. Deploy as Web app: Execute as you, Who has access: Anyone.
 * 6. Put the deployment /exec URL in feedback/index.html as the form action.
 */

const FEEDBACK_SHEET_NAME = 'Raw Responses';
const MAX_FIELD_LENGTH = 10000;
const REQUIRED_FIELDS = ['role', 'version', 'summary', 'privacyAcknowledgement'];

function setupFeedbackLedger() {
  const props = PropertiesService.getScriptProperties();
  let spreadsheetId = props.getProperty('FEEDBACK_SPREADSHEET_ID');
  let spreadsheet;

  if (spreadsheetId) {
    spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  } else {
    spreadsheet = SpreadsheetApp.create('Ironveil Press — Public Playtest Feedback Ledger');
    props.setProperty('FEEDBACK_SPREADSHEET_ID', spreadsheet.getId());
  }

  let sheet = spreadsheet.getSheetByName(FEEDBACK_SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(FEEDBACK_SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp (UTC)', 'Submission ID', 'Form Type', 'Role', 'Build Played',
      'Scenario or Module', 'People at Table', 'Session Length', 'Session Summary', 'What Worked',
      'Confusion or Friction', 'Rules Observations', 'Preparation Help', 'Agency Notes', 'Accessibility Notes',
      'Email', 'Quote Permission', 'Contact Permission', 'Source', 'Form Version'
    ]);
    sheet.setFrozenRows(1);
  }

  Logger.log('Feedback ledger: ' + spreadsheet.getUrl());
  return spreadsheet.getUrl();
}

function doGet() {
  return HtmlService.createHtmlOutput('<!doctype html><title>Ironveil Press feedback endpoint</title><p>Feedback endpoint is ready.</p>');
}

function doPost(e) {
  try {
    const data = normalize_(e && e.parameter ? e.parameter : {});
    if (data.website) return response_('Thank you.');

    REQUIRED_FIELDS.forEach(function (field) {
      if (!data[field]) throw new Error('A required field is missing.');
    });

    const props = PropertiesService.getScriptProperties();
    const spreadsheetId = props.getProperty('FEEDBACK_SPREADSHEET_ID');
    if (!spreadsheetId) throw new Error('Feedback ledger is not configured.');

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName(FEEDBACK_SHEET_NAME) || spreadsheet.insertSheet(FEEDBACK_SHEET_NAME);
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      sheet.appendRow([
        new Date(),
        Utilities.getUuid(),
        data.formType,
        data.role || data.formType,
        data.version,
        data.scenario,
        data.players,
        data.duration,
        data.summary,
        data.worked,
        data.confusing,
        data.rules,
        data.prep,
        data.agency,
        data.accessibility,
        data.email,
        data.quotePermission === 'yes' ? 'Yes' : 'No',
        data.contactPermission === 'yes' ? 'Yes' : 'No',
        data.source,
        data.formVersion
      ]);
    } finally {
      lock.releaseLock();
    }

    return response_('Thank you. Your report has been received.');
  } catch (error) {
    console.error(error);
    return response_('The report could not be saved. Please try again or use the public issue form.', true);
  }
}

function normalize_(params) {
  const output = {};
  Object.keys(params).forEach(function (key) {
    output[key] = String(params[key] || '').trim().slice(0, MAX_FIELD_LENGTH);
  });
  return output;
}

function response_(message, isError) {
  const color = isError ? '#8d2d25' : '#2f633b';
  const safeMessage = message.replace(/[&<>"']/g, function (char) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char];
  });
  return HtmlService.createHtmlOutput(
    '<!doctype html><meta name="viewport" content="width=device-width"><p style="font:16px Georgia;color:' + color + '">' + safeMessage + '</p>'
  ).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
