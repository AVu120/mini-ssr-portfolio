import {ISkill, IContext} from "../../types/skills";
// Mocks data fetching from internal/external api.
import data from "../../mock-remote-db/skills.json";

export const getStaticPaths = async () => {
  try {
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
