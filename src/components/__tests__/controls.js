import React from "react"
import { render } from "@testing-library/react"
import Controls from "../controls"
const sampleData = {
  fragments: [
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
  ],
}
const sampleTimeStamp = 2.729
test("Displays on the screen", () => {
  const { getByTestId } = render(
    <Controls data={sampleData} currentTime={sampleTimeStamp} />
  )
  // Assertion
  expect(getByTestId("controls")).toHaveTextContent("controls")
})
