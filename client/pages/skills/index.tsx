export const getStaticProps = async () => {
  try {
    const response = await fetch("http://localhost:5000/skills");
    const data = await response.json();

    return {
      props: {
        skills: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {props: {error: error.toString()}};
  }
};

import Head from "next/head";
import styles from "./Skills.module.css";

interface ISkill {
  name: string;
  url: string;
}
interface IProps {
  skills?: ISkill[];
  error?: string;
}

const Skills = ({skills, error}: IProps) => {
  return (
    <>
      <Head>
        <title>Mini Portfolio | Skills</title>
      </Head>
      <div>
        <h1 className={styles.title}>Skills</h1>
        {skills ? (
          <ul>
            {skills.map((skill) => (
              <li
                key={`skill-${skill.name}-${skill.url}`}
                className={styles.list_item}
              >
                <a href={skill.url}>
                  <h3 className={styles.list_item_name}>{skill.name}</h3>
                </a>
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

export default Skills;
