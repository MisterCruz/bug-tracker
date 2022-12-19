import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="dark:bg-gray-700 dark:text-gray-400">
      <Head>
        <title>Bug Tracker</title>
        <meta
          name="description"
          content="Bug tracker app built with Next.js and TypeScript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
