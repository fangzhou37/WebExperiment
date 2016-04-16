import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import Icon from 'assets/icon'
import { rhythm } from 'utils/typography'
import includes from 'underscore.string/include'
import { colors, activeColors } from 'utils/colors'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    const docsActive = includes(this.props.location.pathname, '/docs/')
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

          <Link className="header-logo" to={prefixLink("/")}>
              <Icon source={prefixLink("/images/lion.png")} />
              爱阿宝 爱小宝 爱生活
          </Link>

          <header className="header">
            <div className="header-wrapper">
                <nav className="header-nav">
                    <Link to={prefixLink('/')}>首页</Link>
                    <Link to={prefixLink('/family/')}>家</Link>
                    <Link to={prefixLink("/moments/")}>狮子的故事</Link>
                    <Link to={prefixLink("/foods/")}>美食</Link>
                    <Link to={prefixLink("/labo/")}>喇脖之舞</Link>
                </nav>
            </div>
          </header>

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
