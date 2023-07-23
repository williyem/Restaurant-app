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
