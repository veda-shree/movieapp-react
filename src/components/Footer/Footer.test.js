import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  test("render Movie App", () => {
    render(<Footer />);

    const movieappelement = screen.getByText("Movie App");
    expect(movieappelement).toBeInTheDocument();
  });

  test("render 2021 Movies", () => {
    render(<Footer />);

    const movieselement = screen.getByText("2021 Movies");
    expect(movieselement).toBeInTheDocument();
  });
});
