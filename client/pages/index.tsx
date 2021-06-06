import Head from "next/head";
import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mini Portfolio | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Welcome to a mini-version of my portfolio that I created used Next.js
          and server-side rendering.
        </p>
        <Link href="/skills">
          <a className={styles.btn}>Check out my skills!</a>
        </Link>
      </div>
    </>
  );
}
