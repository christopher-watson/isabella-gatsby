import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThankYou = () => (
  <Layout>
    <SEO title="Thank You" />
    <div className="thank-you-div">
      <h1>Thank you!</h1>
      <p>Hope to see you soon!</p>
      <Link to="/">
        <i class="fas fa-home"></i>
      </Link>
    </div>
  </Layout>
)

export default ThankYou
