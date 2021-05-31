import Head from "next/head";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <>
      <Head>
        <title>Mini Portfolio | Experience</title>
      </Head>
      <div>
        <h1 className={styles.title}>Experience</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, rerum,
          autem excepturi eius illum provident, cum labore quisquam tempora
          aliquam iure magni distinctio error veritatis voluptas? Eaque possimus
          illo quibusdam.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, rerum,
          autem excepturi eius illum provident, cum labore quisquam tempora
          aliquam iure magni distinctio error veritatis voluptas? Eaque possimus
          illo quibusdam.
        </p>
      </div>
    </>
  );
};

export default Experience;
