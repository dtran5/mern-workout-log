import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/workouts", (req, res, ctx) => {
    return res(
      ctx.json([
        { liftName: "Squats", sets: 3, reps: 5, weight: 405 },
        { liftName: "Squats", sets: 3, reps: 10, weight: 225 },
      ])
    );
  }),
];
