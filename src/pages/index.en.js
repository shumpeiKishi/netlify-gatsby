import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPageEn = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Blog</h1>
      {
        data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div key={node.id}>
              <Link to={`/${node.fields.slug}`}>
                {node.frontmatter.title}
              </Link>
            </div>
          )
        })
      }
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark  (filter: {fields: {langKey: {eq: "en"}}}) {
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

export default IndexPageEn
