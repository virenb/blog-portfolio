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

const IndexPage = ({ data }) => {
  const { edges } = data.allContentfulBlogPost;
  console.log(edges)
  return (
    <Layout>
      <SEO title="Home" />
      <h2>Hej World</h2>
      <div>
        <p>
          Like to learn and write about software and web related technologies. 
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
          <LIButton><Anchor href="https://linkedin.com/in/vbhagat" target="_blank">LinkedIn</Anchor></LIButton>
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