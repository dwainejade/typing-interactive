import { graphql, withPrefix } from "gatsby"
import React from "react"
import Header from "../components/Header"

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

  return (
    <div className={`Main ${interactiveData.slug}`}>
      <Header title={interactiveData.title} />
      <p>{interactiveData.description}</p>
    </div>
  )
}

export default TemplatePage
