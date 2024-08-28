import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import {GoogleOAuthProvider} from "@react-oauth/google"
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Mainpage from "./Mainpage";
const inter = Inter({ subsets: ["latin"] });
const quickSand=Quicksand({subsets:["latin"]})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const queryClient=new QueryClient();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={quickSand.className}>
        <Mainpage>{children}</Mainpage>
      
      </body>
      
      
    </html>
  );
}
