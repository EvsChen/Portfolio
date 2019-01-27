import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
    <React.Fragment>
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
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
