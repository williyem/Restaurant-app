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
        <div className="sm:max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 max-w-[95%]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
