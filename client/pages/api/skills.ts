import {NextApiRequest, NextApiResponse} from "next";
import skills from "../../mock-remote-db/skills.json";
import {TSkills} from "../../types/skills";
import {isDataValid, isEmptyArray} from "../../utils/validators";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (isDataValid<TSkills>(skills)) res.send(skills);
  else {
    const errorMessage = isEmptyArray<TSkills>(skills)
      ? "I have no skills."
      : "Unable to retrieve skills.";
    res.status(500).send(errorMessage);
  }
};
