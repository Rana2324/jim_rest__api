import * as workoutDb from "../database/workoutDb.js";

export const allWorkoutService = () => {
  try {
    const allworkouts = workoutDb.allWorkout();
    return allworkouts;
  } catch (error) {
    throw error;
  }
};

export const getOneWorkoutService = (workoutId) => {
  try {
    const workout = workoutDb.oneWorkout(workoutId);
    return workout;
  } catch (error) {
    throw error;
  }
};
export const createWorkoutService = () => {};
export const updateWorkoutService = () => {};
export const deleteWorkoutService = () => {};
