import Head from "next/head";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <>
      <Head>
        <title>Mini Portfolio | Skills</title>
      </Head>
      <div>
        <h1 className={styles.title}>Skills</h1>
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

export default Skills;
