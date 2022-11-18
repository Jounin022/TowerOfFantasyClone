import { SectionProvider } from "contexts/section";
import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles()}
      <SectionProvider>
        <Component {...pageProps} />
      </SectionProvider>
    </>
  );
}

export default MyApp;
