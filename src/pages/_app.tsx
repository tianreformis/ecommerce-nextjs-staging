import { NavbarHome } from "@/components/ui/navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import {Montserrat, Poppins } from "next/font/google"
import { useRouter } from "next/router";

const disableNavbar = ['auth', 'admin','404'];

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400"],
});

export default function App({ Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { pathname } = useRouter();
  return (
    <SessionProvider session={session}>
      <div className={poppins.className && montserrat.className}>
        {!disableNavbar.includes(pathname.split('/')[1]) && <NavbarHome />}
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
