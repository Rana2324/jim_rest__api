import express from "express";
import workoutRoutes from "./workoutRoutes.js";

const router = express.Router();

//route

router.use("/workout", workoutRoutes);

export default router;
