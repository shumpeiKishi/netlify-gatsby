import React from "react"
import { graphql } from "gatsby"
import IMG from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Kujira Digital | 著者について" />
      <h1>著者について</h1>
      <div style={{ display: `flex`}}>
      <div style={{ width: `40rem`, marginRight: `2rem`}}>
          <IMG fluid={data.file.childImageSharp.fluid} />
        </div>
        <div>
          <p>DrupalとJavaScriptが好きなWebエンジニア、岸俊兵の個人ブログです。</p>
          <h2>関心</h2>
          <ul>
            <li>Drupal</li>
            <li>JavaScript</li>
          </ul>
          <h2>資格</h2>
          <ul>
            <li>アクイア認定Drupal 8グランドマスター</li>
          </ul>
  
        </div>
        
      </div>
    </Layout>
  )  
}

export const query = graphql`
  query {
    file (relativePath: {eq: "kujira_logo.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      relativePath
    }
  }  
`



export default AboutPage
