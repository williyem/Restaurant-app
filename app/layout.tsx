import { Cart, NavBar, Footer } from "@/components";
import "./globals.css";
import { Nunito } from "next/font/google";
import { ReduxProvider } from "@/utils/redux/provider";
import Banner from "@/components/banner";
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
          {/* <Banner /> */}
          <NavBar />
          <Cart />

          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
