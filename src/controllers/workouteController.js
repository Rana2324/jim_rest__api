import * as workoutService from "../services/workoutService.js";

export const getAllWorkout = (req, res) => {
  const allWorkouts = workoutService.allWorkoutService();

  if (!allWorkouts) {
    res
      .send({
        status: "Failed",
        message: "Failed to get allWorkouts",
      })
      .status(404);
  }
  res
    .send({
      status: "Success",
      message: "Successfully get the allWorkouts",
      data: allWorkouts,
    })
    .status(200);
};
export const getOneWorkout = (req, res) => {
  const { workoutId } = req.params;

  if (!workoutId) {
    res
      .send({
        status: "Failed",
        message: `Failed to get workoutId ${workoutId}`,
      })
      .status(404);
  }

  const singleWorkout = workoutService.getOneWorkoutService(workoutId);
  res
    .send({
      status: "Success",
      message: `Successfully  to get the workout`,
      data: singleWorkout,
    })
    .status(200);
};
export const createWorkout = (req, res) => {
  res.send("get create workout");
};
export const updateWorkout = (req, res) => {
  res.send("get update workout");
};
export const deleteWorkout = (req, res) => {
  res.send("get delete workout");
};
