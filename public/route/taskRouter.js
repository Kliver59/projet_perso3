import express from "express";

const taskRouter = express.Router();

// Définir des routes pour `taskRouter`
taskRouter.get("/", (req, res) => {
  res.json({ message: "Liste des tâches" });
});

export default taskRouter;
