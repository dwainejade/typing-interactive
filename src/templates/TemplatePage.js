import { graphql, withPrefix } from "gatsby" // withPrefix has been included for any media that needs to accessed from the data folder
import React, { useState } from "react"
import App from "../components/App"

// grab the data
export const query = graphql`
  query($slug: String!) {
    sampleDataJson(slug: { eq: $slug }) {
      slug
      title
      activityType
      startImage
      description
      referenceText
      timed
      progress
      errors
      speed
      enabledKeys
    }
  }
`

const TemplatePage = ({ data }) => {
  const interactiveData = data.sampleDataJson
  const [state, setState] = useState({
    title: interactiveData.title,
    activityType: interactiveData.activityType,
    startImage: interactiveData.startImage,
    description: interactiveData.description,
    referenceText: interactiveData.referenceText,
    timed: interactiveData.timed,
    progress: interactiveData.progress,
    errors: interactiveData.errors,
    speed: interactiveData.speed,
    enabledKeys: interactiveData.enabledKeys,
    startScreenActive: true,
    activityScreenActive: false,
    endScreenActive: false,
  })

  return (
    <div className={`Main ${interactiveData.slug}`}>
      <App setState={setState} state={state} />
    </div>
  )
}

export default TemplatePage
