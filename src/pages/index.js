import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <span style={{ lineHeight: `2.4rem` }}>{node.frontmatter.date}</span>
            <Link to={`${node.fields.slug}`}>
              <h3 style={{ fontSize: `1.2rem` }}>{node.frontmatter.title}</h3>
            </Link>
          </div>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark  (filter: {fields: {langKey: {eq: "ja"}}}, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY年MM月DD日")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
