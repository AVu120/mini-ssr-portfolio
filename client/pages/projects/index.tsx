export const getStaticProps = async () => {
  try {
    const response = await fetch("http://localhost:5000/projects");
    const data = await response.json();
    return {
      props: {
        projects: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {props: {error: error.toString()}};
  }
};

import Head from "next/head";
import {IProps} from "../../types/projects";
import styles from "./Projects.module.css";

const Projects = ({projects, error}: IProps) => {
  return (
    <>
      <Head>
        <title>Mini Portfolio | Projects</title>
      </Head>
      <div>
        <h1 className={styles.title}>Projects</h1>
        {projects ? (
          <ul>
            {projects.map((project) => (
              <li
                key={`project-${project.company}-${project.name}-${project.when}`}
                className={styles.list_item}
              >
                {Object.keys(project).map((key) => {
                  const capitalizedKey =
                    key.charAt(0).toUpperCase() + key.slice(1);
                  return (
                    <p>
                      <b>{`${capitalizedKey}:`}</b>
                      {` ${project[key]}`}
                    </p>
                  );
                })}
              </li>
            ))}
          </ul>
        ) : (
          <h3>{error}</h3>
        )}
      </div>
    </>
  );
};

export default Projects;
