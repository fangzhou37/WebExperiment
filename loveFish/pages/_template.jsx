import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import { rhythm } from 'utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: '#E96956',
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(1/2)}`,

            }}
          >
            <Link
              to={prefixLink('/')}
              style={{
                color: 'black',
                textDecoration: 'none',
                fontSize: 30,
                fontWeight: 500,
              }}
            >
              Forever Love For Fishbrook
            </Link>
            <br/>
            <Link
              to={prefixLink('/')}
              style={{
                color: 'black',
                textDecoration: 'none',
                paddingLeft: 500,
                fontSize: 20
              }}
            >
            --Ark
            </Link>

          </Container>
        </Headroom>

        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
            paddingTop: 0,
            flex: 0.4
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
