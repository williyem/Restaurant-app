import { NavBar } from "@/components";
import "./globals.css";
import { Nunito } from "next/font/google";
import { Footer } from "@/components";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Delivery App",
  description: "Food delivery app ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
