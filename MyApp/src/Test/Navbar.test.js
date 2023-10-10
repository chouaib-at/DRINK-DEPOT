import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";

test("renders Navbar component", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  const logoText = screen.getByText(/DRINK DEPOT/i);
  expect(logoText).toBeInTheDocument();

  const homeLink = screen.getByText(/Home/i);
  const aboutLink = screen.getByText(/About/i);
  const newsletterLink = screen.getByText(/Newsletter/i);
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(newsletterLink).toBeInTheDocument();
});
