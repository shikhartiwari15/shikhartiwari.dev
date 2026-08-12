export default function ComingSoon() {
  // Rendered at build time (static export) — doubles as a "last revised" date on the title block.
  const revisedOn = new Date()
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase()
    .replace(/ /g, ".");

  return (
    <main className="sheet">
      {/* Registration marks — corners of a printed technical drawing */}
      <span className="crop crop--tl" aria-hidden="true" />
      <span className="crop crop--tr" aria-hidden="true" />
      <span className="crop crop--bl" aria-hidden="true" />
      <span className="crop crop--br" aria-hidden="true" />

      <header className="statusbar">
        <span>PROJECT / PORTFOLIO_V1</span>
        <span>
          STATUS / IN_PROGRESS
          <span className="cursor" aria-hidden="true" />
        </span>
      </header>

      <section className="hero">
        <p className="eyebrow">// SITE SCHEMATIC — SHEET 1 OF 1</p>

        <h1 className="name">SHIKHAR</h1>
        <p className="role">
          AI/ML ENGINEER — EMBEDDED SYSTEMS &amp; COMPUTER VISION
        </p>

        <div className="dimension" role="img" aria-label="Coming soon">
          <span className="dimension__label">COMING SOON</span>
        </div>

        <div className="meter" aria-hidden="true">
          <div className="meter__label">
            <span>BUILD PROGRESS</span>
            <span>68%</span>
          </div>
          <div className="meter__track">
            <div className="meter__fill" />
          </div>
        </div>

        {/* EDIT_ME: swap in a real address before you deploy */}
        <a className="contact" href="mailto:contact@shikhartiwari.dev">
          <span className="contact__arrow" aria-hidden="true">
            →
          </span>
          GET IN TOUCH
          <span className="contact__value">contact@shikhartiwari.dev</span>
        </a>
      </section>

      <footer className="titleblock">
        <div className="titleblock__head">PORTFOLIO — COMING SOON</div>
        <dl className="titleblock__grid">
          <dt>DRAWN BY</dt>
          <dd>SHIKHAR</dd>
          <dt>REV</dt>
          <dd>A</dd>
          <dt>DATE</dt>
          <dd>{revisedOn}</dd>
          <dt>SHEET</dt>
          <dd>1 OF 1</dd>
        </dl>
      </footer>
    </main>
  );
}
