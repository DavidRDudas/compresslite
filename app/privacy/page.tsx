import type { Metadata } from "next";
import Link from "next/link";
import { BrandHeader, SiteFooter } from "../site-components";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "CompressLite processes photos on device and does not collect personal data, track users, or operate advertising systems.",
};

export default function PrivacyPage() {
  return (
    <div className="site-shell">
      <BrandHeader />
      <main className="policy-main">
        <header className="policy-hero wrap">
          <p className="kicker">Your photos remain yours</p>
          <h1>Privacy Policy</h1>
          <p className="policy-lede">
            CompressLite is designed to compress photos without sending them off
            your device or to an app-operated server.
          </p>
          <p className="updated">Effective August 10, 2026 · Last updated August 10, 2026</p>
        </header>

        <div className="policy-layout wrap">
          <aside className="policy-summary" aria-label="Privacy summary">
            <p className="summary-label">At a glance</p>
            <ul>
              <li><span>✓</span> No accounts</li>
              <li><span>✓</span> No ads or tracking</li>
              <li><span>✓</span> No developer data collection</li>
              <li><span>✓</span> Processing happens on device</li>
            </ul>
          </aside>

          <article className="policy-copy">
            <section>
              <h2>1. Who operates CompressLite</h2>
              <p>
                CompressLite is developed and operated by David Dudas. This
                policy explains how the CompressLite iOS app handles information.
              </p>
            </section>

            <section>
              <h2>2. Information we collect</h2>
              <p>
                David Dudas does not collect, receive, sell, or share personal
                information through CompressLite. The app does not include user
                accounts, advertising, analytics, or cross-app tracking.
              </p>
            </section>

            <section>
              <h2>3. Photo access and processing</h2>
              <p>
                When you choose photos or grant Photos access, CompressLite reads
                only the photos made available through Apple&apos;s system controls.
                Compression runs on your device. The app saves compressed copies
                to your Photos library only after you take a save action.
              </p>
              <p>
                Saving copies does not remove originals. If you explicitly choose
                to replace originals, CompressLite first creates and verifies the
                new copies, then asks Apple Photos to move the selected originals
                to Recently Deleted. Apple presents the deletion authorization,
                and you may cancel it.
              </p>
            </section>

            <section>
              <h2>4. iCloud Photos</h2>
              <p>
                If an original is stored in iCloud Photos, Apple&apos;s Photos
                framework may download it to your device so CompressLite can
                process it. CompressLite does not upload photos to a server
                operated by David Dudas. Apple&apos;s handling of iCloud Photos is
                governed by Apple&apos;s own terms and privacy policy.
              </p>
            </section>

            <section>
              <h2>5. Photo metadata</h2>
              <p>
                CompressLite preserves a photo&apos;s creation date when saving a new
                copy. Other camera metadata may be preserved when you enable that
                option. Precise location metadata is removed by default and is
                preserved only if you explicitly enable location preservation.
              </p>
            </section>

            <section>
              <h2>6. Information stored on your device</h2>
              <p>
                CompressLite stores app preferences, compression history totals,
                and processing checkpoints locally on your device. This information
                helps the app remember settings, show estimated savings, and resume
                interrupted work. You can clear compression history in the app.
                Local app data is also removed when you delete the app, subject to
                normal iOS behavior and device backups.
              </p>
            </section>

            <section>
              <h2>7. Children&apos;s privacy</h2>
              <p>
                CompressLite is a general-purpose utility and does not knowingly
                collect personal information from children or any other users.
              </p>
            </section>

            <section>
              <h2>8. Security</h2>
              <p>
                CompressLite minimizes privacy risk by processing photos on device,
                relying on Apple&apos;s photo permission controls, and avoiding developer-
                operated photo storage. No method of device or software security can
                be guaranteed to be perfect.
              </p>
            </section>

            <section>
              <h2>9. Changes to this policy</h2>
              <p>
                This policy may be updated if CompressLite&apos;s features or legal
                obligations change. The current version and its effective date will
                remain available on this page.
              </p>
            </section>

            <section>
              <h2>10. Contact</h2>
              <p>
                For privacy questions or support, visit the <Link href="/">CompressLite
                support page</Link> or open a support request using the contact link
                provided there. Please do not include private photos in a support request.
              </p>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
