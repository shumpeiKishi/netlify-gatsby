import React from "react"
import { graphql } from "gatsby"
import IMG from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
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
          <h2>経歴</h2>
          <p>
            カナダ・イエローナイフでウェブ開発者として勤務していた際、エンタープライズ向けオープンソースCMSのDrupalによる開発に従事。
            帰国後、アクイア・Drupalのヘビーユーザーであるジョンソン・エンド・ジョンソン株式会社の社内SEを経て、2019年1月よりアクイアジャパン合同会社のSolusions Engineer。
          </p>
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
    file (relativePath: {eq: "images/kujira_logo.png"}) {
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
