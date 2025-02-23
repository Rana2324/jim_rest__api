import DB from "./db.json" assert { type: "json" };

export const allWorkout = () => {
  try {
    const workouts = DB.workouts;
    return workouts;
  } catch (error) {
    throw {
      status: error.status,
      message: error.message,
    };
  }
};
export const oneWorkout = (workoutId) => {
  try {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout) {
      throw {
        status: 404,
        message: `Workout not found ${workoutId}`,
      };
    }
    return workout;
  } catch (error) {
    throw {
      status: error.status,
      message: error.message,
    };
  }
};
