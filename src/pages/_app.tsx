import type { AppProps } from "next/app";
import { GlobalStyles } from "../shared/global";
import { TopBar } from "@/shared/components/TopBar";
import { Footer } from "@/shared/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
