import express from "express";
import skills from "../db/skills.json";

const app = express();
app.disable("x-powered-by");
const port = 5000;

app.get("/", (req, res) => res.status(200).send("OK"));
app.get("/skills", (req, res) => {
  res.send(skills);
});
app.get("/projects", (req, res) => res.status(200).send("projects"));

app.get("/experience", (req, res) => res.status(200).send("experience"));

app.listen(port, () => console.log(`Server is running on port ${port}.`));
