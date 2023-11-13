import { Cart, NavBar, Footer } from "@/components";
import "./globals.css";
import { Nunito } from "next/font/google";
import { ReduxProvider } from "@/utils/redux/provider";

import "react-phone-number-input/style.css";
import AuthProvider from "@/utils/context/auth-context";

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
        <ReduxProvider>
          <AuthProvider>
            {/* <Banner /> */}
            <NavBar />
            <Cart />

            {children}
            <Footer />
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
