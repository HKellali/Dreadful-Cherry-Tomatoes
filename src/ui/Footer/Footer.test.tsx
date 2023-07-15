import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

test("Header renders welcome message", () => {
  render(<Footer />);
  const codeMessage = screen.getByText(
    /Welcome to the Rviewer React skeleton!/i
  );
  expect(codeMessage).toBeInTheDocument();
});
