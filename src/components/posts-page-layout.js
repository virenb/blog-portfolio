import React from 'react';
import Layout from './layout';
import { MDXProvider } from '@mdx-js/react';

export default function PostLayout({ children }) {
  return (
    <Layout>
      <MDXProvider
        components={{
          h1: props => <h1 {...props} style={{ color: 'pink' }} />,
          p: props => <p {...props} style={{ color: 'rebeccapurple' }} />,
        }}
      >
        {children}
      </MDXProvider>
    </Layout>
  );
}
