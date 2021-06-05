import express from "express";
import skills from "../db/skills.json";
import projects from "../db/projects.json";
import {isDataValid, isEmptyArray} from "./utils/validators";

const app = express();
app.disable("x-powered-by");
const port = 5000;

app.get("/skills", (req, res) => {
  isDataValid(skills)
    ? res.send(skills)
    : res
        .status(500)
        .send(
          isEmptyArray(skills)
            ? "I have no skills."
            : "Unable to retrieve skills."
        );
});

app.get("/projects", (req, res) => res.send(projects));

app.get("/experience", (req, res) => res.status(200).send("experience"));

app.listen(port, () => console.log(`Server is running on port ${port}.`));
