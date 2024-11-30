import { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins from next/font/google
import "./globals.css";
import NavBar from "./component/nav/NavBar";
import Footer from "./component/footer/Footer";

// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: [  "400" , "700",  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "E-Shop",
  description: "E-Commerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased text-slate-700`}
      >
        <main >
           <div className="flex flex-col min-h-screen">
              <NavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
           </div>
        </main>
      </body>
    </html>
  );
}
