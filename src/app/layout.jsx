import Header from "@/component/Header";
import "./globals.css";
import Footer from "@/component/Footer";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SessionProvider>
          <Header/>
          {children}
          <Footer/>
        </SessionProvider>
      </body>
    </html>
  );
}
