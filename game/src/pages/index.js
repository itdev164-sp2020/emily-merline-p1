import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ul>
      {
        data.allContentfulTriviaGame.edges.map(edge => (
          <li>
            <Link to={edge.node.slug} key={edge.node.id}>{edge.node.gameTitle}</Link>
            <div>
              <img src={edge.node.triviaPic.fluid.src} alt="hero"/>
            </div>
          </li>
        ))
      }
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
{
  allContentfulTriviaGame {
    edges {
      node {
        id
        gameTitle
        slug
        triviaPic {
          fluid(maxWidth: 300){
            src
          }
        }
      }
    }
  }
}
`