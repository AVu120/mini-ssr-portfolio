import {NextApiRequest, NextApiResponse} from "next";
import projects from "../../mock-remote-db/projects.json";
import {TProjects} from "../../types/projects";
import {isDataValid, isEmptyArray} from "../../utils/validators";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (isDataValid<TProjects>(projects)) res.send(projects);
  else {
    const errorMessage = isEmptyArray<TProjects>(projects)
      ? "I have no projects."
      : "Unable to retrieve projects.";
    res.status(500).send(errorMessage);
  }
};
