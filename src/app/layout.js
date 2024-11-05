import Header from "@/components/Header";
import "./globals.css";
import 'dotenv/config'

export const metadata = {
  title: "Modern Portfolio",
  description: "Personal portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
