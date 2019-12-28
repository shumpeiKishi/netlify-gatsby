import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Kujira Digital | 著者について" />
      <h1>著者について</h1>
      <p>カナダ・イエローナイフでウェブ開発者として勤務していた際、エンタープライズ向けオープンソースCMSのDrupalによる開発に従事。
        帰国後、アクイア・Drupalのヘビーユーザーであるジョンソン・エンド・ジョンソン株式会社の社内SEを経て、2019年1月よりアクイアジャパン合同会社のSolusions Engineer。</p>
    </Layout>
  )
}

export default AboutPage
