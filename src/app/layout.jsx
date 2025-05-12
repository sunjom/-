import Header from "@/component/Header";
import "./globals.css";
import Footer from "@/component/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
