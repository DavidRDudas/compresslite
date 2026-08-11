import Link from "next/link";

export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i className="petal petal-one" />
      <i className="petal petal-two" />
      <i className="petal petal-three" />
      <i className="petal petal-four" />
      <i className="petal petal-five" />
      <i className="flower-core" />
    </span>
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
        <p className="copyright">© 2026 David Dudas</p>
      </div>
    </footer>
  );
}
