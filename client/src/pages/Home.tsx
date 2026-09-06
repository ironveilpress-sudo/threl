import { Link } from "wouter";

const heroImage = "/manus-storage/ironveil-hero-lantern-march_4e60efb9.png";
const playtestImage = "/manus-storage/ironveil-playtest-crossing_1e3bff1b.png";
const catalogueImage = "/manus-storage/ironveil-catalogue-ashenfold_03d8504c.png";
const lanternMark = "/manus-storage/ironveil-lantern-mark_d1d947ac.png";

const navItems = [
  ["Our Mission", "#mission"],
  ["The Threl", "#threl"],
  ["Modules", "#catalogue"],
  ["Public Playtest", "/playtest"],
  ["Licensing", "#licensing"],
  ["Community", "#community"],
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Iron Veil Press home">
          <img src={lanternMark} alt="" className="brand-mark" />
          <span><b>IRON VEIL</b><em>PRESS</em></span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, href]) => href.startsWith("#") ? <a key={label} href={href}>{label}</a> : <Link key={label} href={href}>{label}</Link>)}
        </nav>
        <a className="header-cta" href="/playtest">Enter the playtest <span>↗</span></a>
      </header>

      <main id="top">
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-shade" />
          <div className="hero-content wrap">
            <p className="eyebrow"><span className="lantern-dot" /> Publisher of grimdark Christian TTRPG adventures</p>
            <h1>There is still<br /><i>a road</i> through the dark.</h1>
            <p className="hero-copy">Iron Veil Press makes adventures where faith carries weight, redemption costs something, and every table leaves a mark on the world.</p>
            <div className="hero-actions"><a className="button button-gold" href="#catalogue">Explore the catalogue <span>→</span></a><a className="text-link" href="#mission">Read our vision <span>↗</span></a></div>
          </div>
          <div className="hero-note"><span>01</span><p>THE THREL<br /><b>A living dark-fantasy world</b></p></div>
        </section>

        <section className="manifesto section" id="mission">
          <div className="wrap split-heading"><div><p className="eyebrow">Our mission</p><h2>Stories with<br /><i>consequence.</i></h2></div><div className="manifesto-lede"><p>We build worlds where Christian themes are not sermon illustrations. They are foundations for choices, relationships, and the cost of keeping a promise when no clean answer remains.</p><a className="text-link" href="#threl">See how we build <span>→</span></a></div></div>
          <div className="principles wrap"><article><span>01</span><h3>Spiritual warfare<br />as encounter design</h3><p>What is unseen changes the way a room feels, a faction moves, and a victory lands.</p></article><article><span>02</span><h3>Redemption arcs,<br />not easy grace</h3><p>Repair is possible. It is never weightless, automatic, or offered without a cost.</p></article><article><span>03</span><h3>Scripture-rooted<br />worldbuilding</h3><p>Elements of faith are woven into history, conflict, and the questions characters carry.</p></article></div>
        </section>

        <section className="threl-section section" id="threl">
          <div className="wrap threl-grid"><div className="threl-image"><img src={playtestImage} alt="Adventurers crossing a broken road toward a lantern-lit city" /><span className="image-caption">A living world, open to the table</span></div><div className="threl-copy"><p className="eyebrow">The Threl</p><h2>Bring questions.<br /><i>Leave marks.</i></h2><p>The Threl is a dark-fantasy setting shaped by the people who enter it. Its roads hold old promises, its cities remember what they were built to forget, and its magic asks what you are willing to carry.</p><p>The current public playtest is an invitation to run Ashenfold, try the Minimum Viable Dabar rules, and tell us what the world became at your table.</p><Link className="button button-outline" href="/playtest">Enter the public playtest <span>↗</span></Link></div></div>
        </section>

        <section className="catalogue section" id="catalogue"><div className="wrap"><div className="section-head"><div><p className="eyebrow">Modules</p><h2>Stories to<br /><i>step inside.</i></h2></div><a className="text-link" href="#community">Find Iron Veil Press <span>→</span></a></div><div className="catalogue-grid"><article className="feature-module"><img src={catalogueImage} alt="Lantern-lit Ashenfold archive table" /><div className="module-info"><p className="module-kicker">The Threl · Levels 3–5</p><h3>The Prodigal Dungeon</h3><p>A wounded estate. A family that left something behind. A place that asks whether restoration is the same thing as return.</p><a href="/playtest">Playtest the Ashenfold scenario <span>↗</span></a></div></article><article className="module-teaser"><span className="module-number">02</span><p className="module-kicker">The Threl · Coming soon</p><h3>The Ashen Covenant</h3><p>A promise made in ash is still a promise.</p><a href="#newsletter">Notify me when it opens <span>↗</span></a></article><article className="module-teaser rust"><span className="module-number">03</span><p className="module-kicker">The Threl · Coming soon</p><h3>Wrath of the Seraphim</h3><p>When judgment arrives, who gets to name it?</p><a href="#newsletter">Notify me when it opens <span>↗</span></a></article></div></div></section>

        <section className="licensing section" id="licensing"><div className="wrap licensing-grid"><div><p className="eyebrow">Licensing</p><h2>Built in the open.<br /><i>Guarded with care.</i></h2></div><div><p>Our compatible rules foundation follows the SRD 5.1 framework and uses Creative Commons attribution where expressly identified. Original Iron Veil Press setting, story, art, and brand material remain Iron Veil Press property unless a release states otherwise.</p><p className="fine-print">Iron Veil Press is not affiliated with Wizards of the Coast. Review the full licensing guidelines before redistributing or adapting public materials.</p><a className="text-link" href="https://github.com/ironveilpress/ironveilpress-site/blob/main/docs/LICENSING_GUIDELINES.md">Read licensing guidelines <span>↗</span></a></div></div></section>

        <section className="community section" id="community"><div className="wrap community-grid"><div><p className="eyebrow">Community</p><h2>Keep the<br /><i>lantern lit.</i></h2><p>Find releases, share session reports, and help shape what The Threl becomes.</p></div><div className="community-links"><a href="https://github.com/ironveilpress/threl-public-playtest"><span>Public playtest</span><b>Run it. Report it. <em>→</em></b></a><a href="https://www.drivethrurpg.com/"><span>DriveThruRPG</span><b>Find the catalogue <em>→</em></b></a><a href="https://itch.io/"><span>Itch.io</span><b>Explore the indie shelf <em>→</em></b></a></div></div></section>

        <section className="newsletter section" id="newsletter"><div className="wrap newsletter-box"><div><p className="eyebrow">The Vigil newsletter</p><h2>News from the<br /><i>road ahead.</i></h2><p>Release notes, playtest calls, design notes, and first access to new modules. No noise. No vague promises.</p></div><form className="signup" onSubmit={(e) => e.preventDefault()}><label htmlFor="email">Your email address</label><div><input id="email" type="email" placeholder="you@example.com" aria-label="Email address" /><button type="submit">Enter the Vigil <span>→</span></button></div><small>By subscribing, you agree to receive Iron Veil Press updates. Unsubscribe any time.</small></form></div></section>
      </main>

      <footer className="site-footer"><div className="wrap footer-top"><a className="brand" href="#top"><img src={lanternMark} alt="" className="brand-mark" /><span><b>IRON VEIL</b><em>PRESS</em></span></a><p>Grimdark adventures for people who want faith, danger, consequence, and redemption to shape play.</p><Link className="button button-gold" href="/playtest">Enter the public playtest <span>↗</span></Link></div><div className="wrap footer-bottom"><span>© 2026 Iron Veil Press</span><span>Made for the tables that keep asking better questions.</span><a href="#licensing">Licensing</a><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}
