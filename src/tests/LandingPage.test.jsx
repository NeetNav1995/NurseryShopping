import { render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "../components/LandingPage";

const renderWithRouter = (ui, { route = '/' } = {}) => {
  return render(ui, { wrapper: BrowserRouter });
};

test("renders LandingPage component", () => {
  renderWithRouter(<LandingPage />);
  
  // Check if the main heading is present
  const mainHeading = screen.getByText(/Welcome To/);
  expect(mainHeading).toBeInTheDocument();

//   // Check if the subheading is present
//   const subHeading = screen.getByText(/Paradise Nursery/);
//   expect(subHeading).toBeInTheDocument();

  // Check if the description text is present
  const descriptionText = screen.getByText(/Where Green Meets Serenity/);
  expect(descriptionText).toBeInTheDocument();

  // Check if the "Get Started" button is present
  const getStartedButton = screen.getByRole('button', { name: /Get Started/i });
  expect(getStartedButton).toBeInTheDocument();
});