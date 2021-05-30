import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./404.module.css";

const NotFound = () => {
  const [count, setCount] = useState(3);
  const router = useRouter();

  // Automatically redirect user to home-page after 3 seconds.
  useEffect(() => {
    const automaticRedirect = setTimeout(() => {
      router.push("/");
    }, 3000);
    const countDown = setInterval(() => {
      setCount((preVal) => preVal - 1);
    }, 1000);

    return () => {
      clearInterval(countDown);
      clearTimeout(automaticRedirect);
    };
  }, []);

  return (
    <div>
      <div className={styles.not_found}>
        <h1>Ooooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Redirecting you to the{" "}
          <Link href="/">
            <a className={styles.homepage_link}>Homepage</a>
          </Link>{" "}
          in {count}.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
