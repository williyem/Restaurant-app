import { Cart, NavBar, Footer } from "@/components";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";

import "react-phone-number-input/style.css";
import { Providers } from "@/utils/providers";

const nunito_Sans = Nunito_Sans({ subsets: ["latin"] });

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
      <body className={nunito_Sans.className}>
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
