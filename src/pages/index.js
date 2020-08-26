import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  //const { edges } = data.allContentfulBlogPost

  return (
    <Layout>
      <SEO title="Home" />
      <h2>Hej World</h2>
      <div>
        <p>HI</p>
      </div>
      <div
        style={{
          margin: `-1rem 0 1rem 0`,
        }}
      ></div>
      {/* <h3>Blog Posts</h3>
      <BlogList reversed>
        {edges.map(({ node }) => {
          return (
            <li key={node.slug}>
              <BlogLink to={node.slug}>{node.title}</BlogLink>
              {new Date(node.date).toLocaleDateString()}
            </li>
          )
        })}
      </BlogList> */}
    </Layout>
  )
}

export default IndexPage

// export const indexQuery = graphql`
//   query {
//     allContentfulBlogPost {
//       edges {
//         node {
//           title
//           date
//           slug
//         }
//       }
//     }
//   }
// `
