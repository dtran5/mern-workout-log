import { render, screen } from "@testing-library/react";

import Workouts from "../Workouts";

test("displays workout details for each exercise", async () => {
  render(<Workouts />);

  //get workouts
  const workouts = await screen.findAllByText("Squats");
  expect(workouts).toHaveLength(2);
});
