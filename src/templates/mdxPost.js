import React from 'react';
import { graphql } from 'gatsby';
//import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';
//import Layout from '../components/layout';
import PostLayout from '../components/posts-page-layout';

export default function PostTemplate({ data: { mdx } }) {
  return (
    <PostLayout>
      <h1>{mdx.frontmatter.title}</h1>
      {new Date(mdx.frontmatter.date).toLocaleDateString()}
      <div>{mdx.frontmatter.tags.join(', ').split('')}</div>
      <br />

      <MDXRenderer>{mdx.body}</MDXRenderer>
    </PostLayout>
  );
}

export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;
