import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Button = styled.button`
  font-size: 1em;
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

const IndexPage = ({ data }) => {
  const { edges } = data.allContentfulBlogPost;
  console.log(edges)
  return (
    <Layout>
      <SEO title="Home" />
      <h2>Hej World</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          rure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div
        style={{
          margin: `1rem`
        }}
      >
        <TButton>Twitter</TButton>
        <GHButton>GitHub</GHButton>
        <LIButton>LinkedIn</LIButton>
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