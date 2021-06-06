import express from "express";
import skills from "../db/skills.json";
import projects from "../db/projects.json";
import experiences from "../db/experiences.json";
import {isDataValid, isEmptyArray} from "./utils/validators";
import {TSkills} from "./types/skills";
import {TProjects} from "./types/projects";
import {TExperiences} from "./types/experiences";

const app = express();
app.disable("x-powered-by");
const port = 5000;

app.get("/skills", (req, res) => {
  isDataValid<TSkills>(skills)
    ? res.send(skills)
    : res
        .status(500)
        .send(
          isEmptyArray<TSkills>(skills)
            ? "I have no skills."
            : "Unable to retrieve skills."
        );
});

app.get("/projects", (req, res) =>
  isDataValid<TProjects>(projects)
    ? res.send(projects)
    : res
        .status(500)
        .send(
          isEmptyArray<TProjects>(projects)
            ? "I have no projects."
            : "Unable to retrieve projects."
        )
);

app.get("/experiences", (req, res) =>
  isDataValid<TExperiences>(experiences)
    ? res.send(experiences)
    : res
        .status(500)
        .send(
          isEmptyArray<TExperiences>(experiences)
            ? "I have no experiences."
            : "Unable to retrieve experiences."
        )
);

app.listen(port, () => console.log(`Server is running on port ${port}.`));
