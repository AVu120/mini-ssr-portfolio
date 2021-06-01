import express from "express";

const app = express();
const port = 5000;

app.get("/skills", (req, res) => {
  const skills = [];
});
app.get("/projects", (req, res) => res.status(200).send("projects"));

app.get("/experience", (req, res) => res.status(200).send("experience"));

app.listen(port, () => console.log(`Server is running on port ${port}.`));
