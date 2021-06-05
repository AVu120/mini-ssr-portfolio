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
  }
};

import Head from "next/head";
import commonStyles from "../common.module.css";
import styles from "./Skills.module.css";

interface ISkill {
  name: string;
  url: string;
}
interface IProps {
  skills: [ISkill];
}

const Skills = ({skills}: IProps) => {
  return (
    <>
      <Head>
        <title>Mini Portfolio | Skills</title>
      </Head>
      <div>
        <h1 className={styles.title}>Skills</h1>
        <ul>
          {skills.map((skill) => (
            <li key={`skill-${skill.name}-${skill.url}`}>
              <a href={skill.url}>
                <h3 className={commonStyles.list_item}>{skill.name}</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
