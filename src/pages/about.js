import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Kujira Digital | 著者について" />
      <h1>著者について</h1>
      <p>Drupal Camp Den Nagoyaにて登壇しました。</p>
    </Layout>
  )
}

export default AboutPage
