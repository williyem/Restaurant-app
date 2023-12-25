import { Cart, NavBar, Footer } from "@/components";
import "./globals.css";
import { Nunito } from "next/font/google";

import "react-phone-number-input/style.css";
import { Providers } from "@/utils/providers";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant App",
  description: "Restaurant App ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>
          {/* <Banner /> */}
          <NavBar />
          <Cart />

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
