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
      <h2>Hej World</h2>
      <div>
        <p>My name is Viren, I am a developer. I like to write (below) about things
        I'm learning or working with. If you would like to reach out, please send me
        a message at virenb@gmail.com.
        </p>
      </div>
      <div>
        <button>Twitter</button>
        <button>GitHub</button>
        <button>LinkedIn</button>
      </div>
      <h3>Blog Posts</h3>
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