import "../styles/globals.css";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import type { AppProps } from "next/app";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: SessionProviderProps["session"] }>) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
