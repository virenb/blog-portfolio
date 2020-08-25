import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/layout"

const shortcodes = { Link } // Provide common components here
export default function PostTemplate({ data: { mdx } }) {
  console.log(mdx.frontmatter.tags)
  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <div>{mdx.frontmatter.tags.join(" ").split("")}</div>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        tags
      }
    }
  }
`
