import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { edges } = data.allContentfulBlogPost;
  console.log(edges)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>  
      <ul>
        {edges.map(({node}) => {
          return (
            <li key={node.slug}><Link to={node.slug}>{node.title}</Link></li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          date
          slug
        }
      }
    }
  }
`