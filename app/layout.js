import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Green Live Construction Ltd",
  description: "Green Live Construction Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          aria-hidden="true"
        >
          <img
            src="/assets/Cloud Background.png"
            alt="Cloud Background"
            className="h-full w-full object-cover opacity-80"
          />
        </div>

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
