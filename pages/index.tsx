import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sed
        maiores? Nemo beatae minima impedit, iste quo temporibus velit cumque
        perferendis quisquam alias ipsa assumenda, consequuntur id blanditiis
        aliquam totam!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sed
        maiores? Nemo beatae minima impedit, iste quo temporibus velit cumque
        perferendis quisquam alias ipsa assumenda, consequuntur id blanditiis
        aliquam totam!
      </p>
      <Link href="/skills">
        <a className={styles.btn}>Check out my skills!</a>
      </Link>
    </div>
  );
}
