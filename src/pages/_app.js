import "@/globals.css";
import "@/styles/effects.scss";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>Thomas Katsikadakos</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
