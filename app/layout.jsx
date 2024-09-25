import "../styles/globals.css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const metadata = {
  title: {
    template: "%s | Netlify",
    default: "Netlify Starter",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lofi">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className="bg-white antialiased">
        <div className="flex min-h-screen flex-col bg-grid-pattern">
          <div className="flex w-full flex-col">
            <Header />
            <div className="grow">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
