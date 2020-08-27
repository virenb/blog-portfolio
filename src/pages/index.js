import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  //const { edges } = data.allContentfulBlogPost

  return (
    <Layout>
      <SEO title="Home" />
      <h2>
        <span role="img" aria-label="waving-hand">
          &#128075;
        </span>{' '}
        Hej World
      </h2>
      <div>
        <p>
          My name is Viren, I'm a software engineer. I'm interested in a variety
          of technologies. Feel free to contact me at{' '}
          <a
            style={{ color: 'var(--socialLinks)' }}
            href="mailto:virenb@gmail.com"
          >
            virenb[at]gmail.com
          </a>
          . All my other links are below.
        </p>

        <a
          style={{ color: 'var(--socialLinks)' }}
          href="https://twitter.com/virengb"
          target="_blank"
        >
          twitter.com/virengb
        </a>
        <br />
        <a
          style={{ color: 'var(--socialLinks)' }}
          href="https://github.com/virenb"
          target="_blank"
        >
          github.com/virenb
        </a>
        <br />
        <a
          style={{ color: 'var(--socialLinks)' }}
          href="https://dev.to/virenb"
          target="_blank"
        >
          dev.to/virenb
        </a>
        <br />
        <a
          style={{ color: 'var(--socialLinks)' }}
          href="https://linkedin.com/in/virenbhagat"
          target="_blank"
        >
          linkedin.com/in/virenbhagat
        </a>
      </div>
      <br />
      <div>
        <h3>Posts</h3>
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
      </div>
    </Layout>
  );
};

export default IndexPage;

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
