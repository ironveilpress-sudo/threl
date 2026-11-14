(() => {
  const form = document.querySelector('[data-feedback-form]');
  if (!form) return;
  const status = document.getElementById('form-status');
  const frame = document.getElementById('feedback-frame');
  const submit = form.querySelector('button[type="submit"]');
  let submitted = false;
  const endpointConfigured = !form.action.includes('REPLACE_WITH_APPS_SCRIPT_DEPLOYMENT_ID');

  form.addEventListener('submit', (event) => {
    if (!endpointConfigured) {
      event.preventDefault();
      status.className = 'status error';
      status.textContent = 'The private feedback ledger is being connected. Please try again once the form is fully connected.';
      return;
    }
    if (form.website.value) {
      event.preventDefault();
      status.className = 'status success';
      status.textContent = 'Thank you.';
      return;
    }
    submitted = true;
    status.className = 'status';
    status.textContent = 'Sending your report…';
    submit.disabled = true;
  });

  frame.addEventListener('load', () => {
    if (!submitted) return;
    status.className = 'status success';
    status.textContent = 'Thank you. Your report has been sent to the private feedback ledger.';
    form.reset();
    submit.disabled = false;
    submitted = false;
  });
})();
