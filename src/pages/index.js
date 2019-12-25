import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  return (
  <Layout>
    <SEO title="Home" />
    <h1>クジラデジタルBlog</h1>
    {
      data.allMarkdownRemark.edges.map( ({node}) => {
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
)}

export const query = graphql`
  {
    allMarkdownRemark {
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

export default IndexPage
