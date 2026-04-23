import type { Metadata } from "next";
import { Geist, Geist_Mono, Quantico, Montserrat  } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";



const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quantico",
});


const montserrat = Montserrat({
  subsets: ["latin"],
   weight: ["400", "700"],
  variable: "--font-montserrat",
});



export const metadata: Metadata = {
  title: "Knex Consultoria jr",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${quantico.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
