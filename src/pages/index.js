import React from "react"
import Layout from "../components/layout"
import Body from "../components/body"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Home"
      keywords={[
        `fitness`,
        `crossfit`,
        `sayreville`,
        `Ben Isabella`,
        `isabella fitness`,
        `crossfit sayreville`,
        `WOD`,
        `wodlife`,
      ]} />
    <Body/>
  </Layout>
)

export default IndexPage
