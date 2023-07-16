import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import React from "react";

test("Header renders welcome message", () => {
  render(<Header />);
  const codeMessage = screen.getByText(
    /Welcome to the Rviewer React skeleton!/i
  );
  expect(codeMessage).toBeInTheDocument();
});
