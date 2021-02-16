import React from "react"
import { render } from "@testing-library/react"
import Text from "../text"
const sampleData = [
  {
    begin: "0.000",
    children: [],
    end: "0.000",
    id: "HEAD",
    language: null,
    lines: [],
  },
  {
    begin: "0.000",
    children: [],
    end: "2.680",
    id: "f000001",
    language: "en",
    lines: ["1"],
  },
  {
    begin: "2.680",
    children: [],
    end: "2.920",
    id: "f000002",
    language: "en",
    lines: ["From"],
  },
]
const sampleTimeStamp = 2.729
test("Displays correct props", () => {
  const { getByTestId } = render(
    <Text data={sampleData} currentTime={sampleTimeStamp} />
  )
  // Assertion
  expect(getByTestId("text")).toHaveTextContent("From")
})

test("Applies highlight to correct word via timestamp", () => {
  const { getByText } = render(
    <Text data={sampleData} currentTime={sampleTimeStamp} />
  )
  expect(getByText("From")).toHaveClass("active")
})
