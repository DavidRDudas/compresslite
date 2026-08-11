import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function BrandMark() {
  return (
    // The exact artwork shipped in the iOS asset catalog.
    // eslint-disable-next-line @next/next/no-img-element
    <img className="brand-mark" src={`${basePath}/app-icon.png`} alt="" aria-hidden="true" />
  );
}

export function BrandHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label="CompressLite support home">
          <BrandMark />
          <span>CompressLite</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/">Support</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <span className="footer-brand">CompressLite</span>
          <p>Made with care by David Dudas.</p>
        </div>
        <div className="footer-links">
          <Link href="/">Support</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <p className="copyright">
          © 2026 <a href="https://dudas.ai">David Dudas</a>
        </p>
      </div>
    </footer>
  );
}
