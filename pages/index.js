import Head from "next/head";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Header from "../components/Header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>LinkedIn Clone using NextJs</title>
        <meta
          name="description"
          content="LinkedIn Clone Using NextJs TailwindCss"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
