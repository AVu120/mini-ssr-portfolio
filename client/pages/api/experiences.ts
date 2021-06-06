import {NextApiRequest, NextApiResponse} from "next";
import experiences from "../../mock-remote-db/experiences.json";
import {TExperiences} from "../../types/experiences";
import {isDataValid, isEmptyArray} from "../../utils/validators";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (isDataValid<TExperiences>(experiences)) res.send(experiences);
  else {
    const errorMessage = isEmptyArray<TExperiences>(experiences)
      ? "I have no experiences."
      : "Unable to retrieve experiences.";
    res.status(500).send(errorMessage);
  }
};
