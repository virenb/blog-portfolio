import React from 'react';
import PropTypes from 'prop-types';
import Toggle from './toggle';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Header from './header';

import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div
        style={{
          backgroundColor: 'var(--bg)',
          color: 'var(--textNormal)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: '50rem',
            padding: '0 1.0875rem 1.45rem',
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
          }}
        >
          <Toggle />
          <Header>
            <h1 style={{ margin: '0' }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                {data.site.siteMetadata.title}
              </Link>
            </h1>
          </Header>

          <div style={{ flex: '1' }}>{children}</div>
          <footer style={{ textAlign: 'center' }}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
