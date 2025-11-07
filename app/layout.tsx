import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Perkembangan Moral & Spiritual",
  description:
    "Penjelasan ringkas dan interaktif tentang perkembangan moral dan spiritual berdasarkan teori Piaget, Kohlberg, dan Fowler.",
  openGraph: {
    title: "Perkembangan Moral & Spiritual",
    description:
      "Penjelasan ringkas dan interaktif tentang perkembangan moral dan spiritual.",
    type: "website",
    url: "https://agentic-34c9d312.vercel.app",
  },
  metadataBase: new URL("https://agentic-34c9d312.vercel.app"),
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.className}>
      <body>
        <main className="container">
          <header className="siteHeader">
            <h1>Perkembangan Moral & Spiritual</h1>
            <p className="tagline">Memahami bagaimana manusia menilai benar-salah dan makna hidup</p>
          </header>
          {children}
          <footer className="siteFooter">
            <p>
              Dibuat untuk pembelajaran. Sumber utama: Piaget, Kohlberg, Fowler.
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
