import React from "react"
import { render } from "@testing-library/react"
import Header from "../Header"

// You have to write data-testid


test("Displays the correct title", () => {
  const { getByTestId } = render(<Header title="Gatsby is awesome!"/>)
  // Assertion
  expect(getByTestId("header")).toHaveTextContent("Gatsby is awesome!")
  // --> Test will pass
})
