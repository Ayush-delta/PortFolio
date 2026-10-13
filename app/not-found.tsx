import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <span className="not-found-code">404</span>
      <h1 className="not-found-title">Page not found</h1>
      <p className="not-found-desc">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">
        Back home
      </Link>
    </div>
  );
}
