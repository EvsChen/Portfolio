import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <style>
            @import url('https://fonts.googleapis.com/css?family=Exo+2:400,600');
          </style>
        </Helmet>
        <div
          style={{
            marginBottom: '1rem',
          }}
        >
          <div
            style={{
              margin: '0 auto',
              maxWidth: '42rem',
              padding: '1rem 0',
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link to="/">
                EvsChen/<span className="c-primary">Portforlio</span>
              </Link>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '42rem',
          }}
        >
          {children}
        </div>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
