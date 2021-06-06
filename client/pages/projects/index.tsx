// Mocks data fetching from internal/external api.
import data from "../../mock-remote-db/projects.json";

export const getStaticProps = async () => {
  try {
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
import {TProjectKey, IProps} from "../../types/projects";
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
                    <p
                      key={`project-${project.company}-${project.name}-${project.when}-${capitalizedKey}`}
                    >
                      <b>{`${capitalizedKey}:`}</b>
                      {` ${project[key as TProjectKey]}`}
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
