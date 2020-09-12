import React from 'react';
import Layout from './layout';
import { MDXProvider } from '@mdx-js/react';

export default function PostLayout({ children }) {
  return (
    <Layout>
      <MDXProvider
        components={{
          a: props => <a {...props} style={{ color: 'var(--socialLinks)' }} />,
        }}
      >
        {children}
      </MDXProvider>
    </Layout>
  );
}
