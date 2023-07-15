import { Cart, NavBar ,Footer } from "@/components";
import "./globals.css";
import { Nunito } from "next/font/google";
import { ReduxProvider } from "@/utils/redux/provider";
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
    // Router.events.on("routeChangeStart", () => {
    //   nProgress.start();
    // });
    // Router.events.on("routeChangeComplete", () => {
    //   nProgress.done();
    // });
  return (
 
    <html lang="en">
      <body className={nunito.className}>
      <ReduxProvider>

        <NavBar />
        <Cart/>

        {children}

        <Footer />
        </ReduxProvider>
      </body>
    </html>
     
  );
}
