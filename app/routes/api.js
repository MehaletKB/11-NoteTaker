import { Router } from "express";
import db from "../db/service.js";

const router = new Router();

router.get("/notes", async(req, res) => {
  const notes = await db.index();
  res.status(200).json(notes)
});

router.post("notes", (req.body, res) => {
  const newNote = await db.create(body);
  const notes = db.index();
  res.status(200).json(notes)
});

router.delete("/notes/:id", (req, res) => {

});

export default router;