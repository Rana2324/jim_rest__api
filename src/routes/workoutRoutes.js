import express from "express";
import * as workoutController from "../controllers/workouteController.js";

const router = express.Router();

//workout routes

router.get("/", workoutController.getAllWorkout);
router.get("/:workoutId", workoutController.getOneWorkout);
router.post("/", workoutController.createWorkout);
router.patch("/:workoutId", workoutController.updateWorkout);
router.delete("/:workoutId", workoutController.deleteWorkout);

export default router;
