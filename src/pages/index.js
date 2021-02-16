import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <div>
    <h1>Gatsby Template</h1>
    <p>
      This is where you can put links for each individual lesson. This page is
      for internal use only.
    </p>
    <Link to="/sample-1/">Go to Sample 1 page</Link> <br />
    <Link to="/sample-2/">Go to Sample 2 page</Link> <br />
  </div>
)

export default IndexPage
