import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SpeakingPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Kujira Digital | 登壇履歴" />
      <h1>登壇履歴</h1>
      <p>Drupal Camp Den Nagoyaにて登壇しました。</p>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark  (filter: {fields: {langKey: {eq: "ja"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default SpeakingPage
