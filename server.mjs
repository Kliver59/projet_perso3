import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import taskRouter from "./route/taskRouter.js";

// Initialiser l'application Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(process.cwd(), "public"))); // Chemin mis à jour pour servir des fichiers statiques
app.use("/api/v1/tasks", taskRouter);

// Route pour le fichier contact.html
app.get("/contact.html", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "contact.html"));
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Exporter le PORT si nécessaire
export default PORT;
