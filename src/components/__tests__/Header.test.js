import React from "react"
import { render } from "@testing-library/react"

// You have to write data-testid
const Header = () => <h1 data-testid="header">Gatsby is awesome!</h1>

test("Displays the correct header", () => {
  const { getByTestId } = render(<Header title="Gatsby is awesome!" />)
  // Assertion
  expect(getByTestId("header")).toHaveTextContent("Gatsby is awesome!")
  // --> Test will pass
})
