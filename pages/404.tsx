import Link from "next/link";
import styles from "../styles/pages/404.module.css";

const NotFound = () => {
  return (
    <div>
      <div className={styles.not_found}>
        <h1>Ooooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a className={styles.homepage_link}>Homepage</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
