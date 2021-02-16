import { graphql } from "gatsby"
import React from "react"

// grab the data
export const query = graphql`
  query($slug: String!) {
    sampleDataJson(slug: { eq: $slug }) {
      slug
      description
      title
    }
  }
`

const TemplatePage = ({ data }) => {
  const interactiveData = data.sampleDataJson

  return (
    <div className={`Main ${interactiveData.slug}`}>
      <h1>{interactiveData.title}</h1>
      <p>{interactiveData.description}</p>
    </div>
  )
}

export default TemplatePage
