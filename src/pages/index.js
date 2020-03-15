import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p> -- Icons Go Here -- </p>
    <h2>Enter Bill Here:</h2>
    <input type="text" />
    <h2>Tip</h2>
    <p> -- Slider Will Go Here -- </p>
    <input type="range"/>
    <h2>Total Bill</h2>
    <p> -- Icon Button Goes Here -- </p>
    <h2>Bill</h2>
    <input type="text" />
    <h2>Tip</h2>
    <input type="text" />
    <h2>Total</h2>
    <input type="text" />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
