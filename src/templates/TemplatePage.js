import { graphql, withPrefix } from "gatsby" // withPrefix has been included for any media that needs to accessed from the data folder
import React, { useState } from "react"
import StartScreen from "../components/StartScreen"
import ActivityScreen from "../components/ActivityScreen"
import EndScreen from "../components/EndScreen"

// grab the data
export const query = graphql`
  query($slug: String!) {
    sampleDataJson(slug: { eq: $slug }) {
      slug
      title
      description
    }
  }
`

const TemplatePage = ({ data }) => {
  const interactiveData = data.sampleDataJson
  const [state, setState] = useState({
    title: interactiveData.title,
    description: interactiveData.description,
    startScreenActive: true,
    activityScreenActive: false,
    endScreenActive: false,
  })

  return (
    <div className={`Main ${interactiveData.slug}`}>
      {state.startScreenActive && (
        <StartScreen setState={setState} state={state} />
      )}
      {state.activityScreenActive && (
        <ActivityScreen setState={setState} state={state} />
      )}
      {state.endScreenActive && <EndScreen setState={setState} state={state} />}
    </div>
  )
}

export default TemplatePage
