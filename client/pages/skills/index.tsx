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
import Link from "next/link";
import {IProps} from "../../types/skills";
import styles from "./Skills.module.css";

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
                <Link href={`/skills/${skill.name}`}>
                  <h3>{skill.name}</h3>
                </Link>
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
