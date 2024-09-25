import Link from "next/link";

export function Footer() {
  return (
    <footer className="pb-12 pt-16 sm:pb-16 sm:pt-24">
      <p className="text-sm">
        <Link
          href="https://docs.netlify.com/frameworks/next-js/overview/"
          className="text-primary underline decoration-dashed underline-offset-8 transition hover:opacity-80"
        >
          Next.js on Netlify
        </Link>
      </p>
    </footer>
  );
}
