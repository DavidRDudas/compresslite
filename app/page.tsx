import type { Metadata } from "next";
import Link from "next/link";
import { BrandHeader, SiteFooter } from "./site-components";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Help, answers, and privacy information for the CompressLite iPhone app.",
};

export default function Home() {
  return (
    <div className="site-shell">
      <BrandHeader />

      <main>
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Private by design
          </div>
          <h1 id="hero-title">Smaller photos.<br />More room for life.</h1>
          <p className="hero-copy">
            CompressLite reduces photo file sizes directly on your iPhone. Your
            photos stay under your control, with clear choices before anything
            is saved or removed.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#help">Get help</a>
            <Link className="button button-secondary" href="/privacy">
              Read the privacy policy
            </Link>
          </div>
        </section>

        <section className="trust-strip" aria-label="Product promises">
          <div className="wrap trust-grid">
            <div><strong>100%</strong><span>on-device processing</span></div>
            <div><strong>Zero</strong><span>accounts or tracking</span></div>
            <div><strong>You choose</strong><span>what gets replaced</span></div>
          </div>
        </section>

        <section className="section wrap" id="help" aria-labelledby="help-title">
          <div className="section-heading">
            <p className="kicker">Support</p>
            <h2 id="help-title">Quick answers</h2>
          </div>
          <div className="faq-grid">
            <article className="faq-card">
              <span className="card-number">01</span>
              <h3>Where are compressed photos saved?</h3>
              <p>
                New compressed copies are added to your Photos library. They
                appear alongside your other photos after iOS finishes saving.
              </p>
            </article>
            <article className="faq-card">
              <span className="card-number">02</span>
              <h3>Does the app delete originals automatically?</h3>
              <p>
                No. CompressLite saves copies by default. Originals are moved
                to Recently Deleted only when you explicitly choose the replace
                option and approve Apple&apos;s confirmation.
              </p>
            </article>
            <article className="faq-card">
              <span className="card-number">03</span>
              <h3>Why can a photo take longer?</h3>
              <p>
                If an original is stored in iCloud, the Photos framework may
                need to download it first. Large files also take longer to
                process while preserving visual quality.
              </p>
            </article>
            <article className="faq-card">
              <span className="card-number">04</span>
              <h3>Can I recover an original?</h3>
              <p>
                Photos moved by the replace option remain in Apple Photos&apos;
                Recently Deleted album for its normal recovery period.
              </p>
            </article>
          </div>
        </section>

        <section className="section wrap contact-section" aria-labelledby="contact-title">
          <div>
            <p className="kicker">Still need a hand?</p>
            <h2 id="contact-title">Tell us what happened.</h2>
            <p>
              Include your iPhone model, iOS version, and the step where the
              problem occurred. Please do not attach private photos.
            </p>
          </div>
          <a
            className="button button-primary"
            href="https://github.com/DavidRDudas/ImageCompression/issues"
            rel="noreferrer"
            target="_blank"
          >
            Contact support
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
