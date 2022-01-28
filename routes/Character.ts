import { Router } from "express";
import {
  createCharacter,
  getAllCharacters,
  getCharacter,
  updateCharacter,
  deleteCharacter,
} from "../controllers/characterController";

const characterRoute = () => {
  const router = Router();

  // TODO logic for creating characters
  router.post("/characters", createCharacter);

  // TODO logic for retrieving characters
  router.get("/characters", getAllCharacters);

  // TODO logic for retrieving character
  router.get("/characters/:id", getCharacter);

  // TODO logic for updating character
  router.put("/characters/:id", updateCharacter);

  // TODO logic for deleting role
  router.delete("/characters/:id", deleteCharacter);

  return router;
};

export { characterRoute };
