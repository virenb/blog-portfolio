import React from 'react';
import Layout from './layout';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './CodeBlock';

export default function PostLayout({ children }) {
  return (
    <Layout>
      <MDXProvider
        components={{
          a: props => <a {...props} style={{ color: 'var(--socialLinks)' }} />,
          pre: props => <div {...props} />,
          code: CodeBlock,
        }}
      >
        {children}
      </MDXProvider>
    </Layout>
  );
}
