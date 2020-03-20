import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  const { title, content, date, tags } = data.contentfulBlogPost;
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <h3>{new Date(date).toLocaleDateString()}</h3>
      <div dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
      <div>{tags}</div>
      <Link to="/">Go Home</Link>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      date
      tags
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`