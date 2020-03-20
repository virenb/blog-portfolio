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
      <h3>{date}</h3>
      <div>
        {content.content}
      </div>
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
        content
      }
    }
  }
`