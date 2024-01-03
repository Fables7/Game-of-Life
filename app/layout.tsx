import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import { ThemeProvider } from "@/providers/themeProvider";
import SidebarContextProvider from "@/context/sidebar-context";
import ReduxProvider from "@/providers/reduxProvider";
import SideBar from "./SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReduxProvider>
            <SidebarContextProvider>
              <div className="flex h-screen  overflow-hidden">
                <SideBar />
                <div className="flex flex-col w-full h-full overflow-hidden ">
                  <NavBar />
                  <main className=" h-full overflow-auto p-5 ">{children}</main>
                </div>
              </div>
            </SidebarContextProvider>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
