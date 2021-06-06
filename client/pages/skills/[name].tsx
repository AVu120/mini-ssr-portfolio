import {ISkill, IContext} from "../../types/skills";

export const getStaticPaths = async () => {
  try {
    const response = await fetch("http://localhost:5000/skills");
    const data = await response.json();
    const paths = data.map((obj: ISkill) => ({params: {name: obj.name}}));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error(error);
  }
};

export const getStaticProps = async (context: IContext) => {
  const name = context.params.name;
  const response = await fetch("http://localhost:5000/skills");
  const data = await response.json();
  const skillData = data.find((obj: ISkill) => obj.name === name);

  return {
    props: {
      skill: skillData,
    },
  };
};

interface IProps {
  skill: ISkill;
}
const Skill = ({skill}: IProps) => {
  return (
    <div>
      <h1>{skill.name}</h1>
      <a href={skill.url}>Documentation</a>
    </div>
  );
};

export default Skill;
