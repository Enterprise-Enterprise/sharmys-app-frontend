import Link from "next/link";

export function Card({ title, text, linkText, href, children }) {
  return (
    <div className="card bg-white text-neutral-600">
      <div className="card-body">
        {title && <h3 className="card-title text-neutral-900">{title}</h3>}
        {text && <p>{text}</p>}
        {linkText && href && (
          <div className="card-actions">
            <Link
              href={href}
              className="link text-neutral-900 transition hover:opacity-80"
            >
              {linkText}
            </Link>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
