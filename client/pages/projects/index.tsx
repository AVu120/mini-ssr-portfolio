import Head from "next/head";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Mini Portfolio | Projects</title>
      </Head>
      <div>
        <h1 className={styles.title}>Projects</h1>
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
      </div>
    </>
  );
};

export default Projects;
