import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArchivePage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Kujira Digital | 過去の記事" />
      <h1>過去の記事</h1>
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={`/${node.fields.slug}`}>
              {node.frontmatter.title}
            </Link>
          </div>
        ))
      }
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

export default ArchivePage
