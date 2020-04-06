import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Button = styled.button`
  font-size: .9rem;
  font-family: -apple-system;
  color: white;
  margin: .8rem .5rem;
  padding: 0.25em 1em;
  border: .15rem solid white;
  border-radius: 10px;
`

const TButton = styled(Button)`
  background-color: #00aced;
`

const GHButton = styled(Button)`
  background-color: #000000; 
`

const LIButton = styled(Button)`
  background-color: #2867b2;
`

const Anchor = styled.a`
  text-decoration: none;
  color: #ffffff;
`
const AnchorEmail = styled(Anchor)`
  color: #000000;
  font-weight: 700; 
`

const BlogList = styled.ol`
  list-style-type: lower-roman;
`

const BlogLink = styled(props => <Link {...props} />)`
  font-weight: 700;
  font-size: 1.25rem;
  padding-right: 0.5rem;
  color: #000000;
  text-decoration: none;
`

const IndexPage = ({ data }) => {
  const { edges } = data.allContentfulBlogPost;
  console.log(edges)
  return (
    <Layout>
      <SEO title="Home" />
      <h2>Hej World</h2>
      <div>
        <p>
          I like to learn and write about software and web related technologies. 
          Say <AnchorEmail href="mailto:virenb@gmail.com" target="_blank">hello</AnchorEmail> at virenb@gmail.com.
        </p>
      </div>
      <div
        style={{
          margin: `-1rem 0 1rem 0`
        }}
      >
        <TButton><Anchor href="https://twitter.com/virengb" target="_blank">Twitter</Anchor></TButton>
        <GHButton><Anchor href="https://github.com/virenb" target="_blank">GitHub</Anchor></GHButton>
        <LIButton><Anchor href="https://www.linkedin.com/in/virenbhagat/" target="_blank">LinkedIn</Anchor></LIButton>
      </div>
      <h3>Blog Posts</h3>
      <BlogList reversed>
        {edges.map(({node}) => {
          return (
            <li key={node.slug}>
              <BlogLink to={node.slug}>{node.title}</BlogLink>
                {new Date(node.date).toLocaleDateString()}
            </li>
          )
        })}
      </BlogList>
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