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
import styles from "./Projects.module.css";

interface IProject {
  company: string;
  name: string;
  role: string;
  achievements: string;
  when: string;
}
interface IProps {
  projects?: IProject[];
  error?: string;
}

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
                <div>
                  <p>
                    <b>Company:</b>
                    {` ${project.company}`}
                  </p>
                  <p>
                    <b>Name:</b>
                    {` ${project.name}`}
                  </p>
                  <p>
                    <b>Role:</b>
                    {` ${project.role}`}
                  </p>
                  <p>
                    <b>Achievements:</b>
                    {` ${project.achievements}`}
                  </p>
                  <p>
                    <b>When:</b>
                    {` ${project.when}`}
                  </p>
                </div>
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
