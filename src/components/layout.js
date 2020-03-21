import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./layout.css"

const Container = styled.div`
  margin: 0 auto;
  max-width: 60rem;
  padding: 0 1.0875rem 1.45rem;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Header = styled.header`
  margin: 1.45rem 0;
`

const Title = styled.h1`
  margin: 0;
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: darkseagreen;
`

const MainContainer = styled.main`
  flex: 1;
`

const Footer = styled.footer`
  text-align: center;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        } 
      }
    }
  `)

  return (
    <>
      <Container>
        <Header>
          <Title>
            <StyledLink to="/">
              {data.site.siteMetadata.title}
            </StyledLink>
          </Title>
        </Header>
        <MainContainer>{children}</MainContainer>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
children: PropTypes.node.isRequired,
}

export default Layout
