import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import {stack as Menu} from 'react-burger-menu';
import Icon from 'assets/icon'
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

          <Link className="header-logo" to={prefixLink("/")}>
              <Icon source={prefixLink("/images/lion.png")} />
              爱阿宝 爱小宝
          </Link>

          <header className="header">
            <div className="header-wrapper">
                <nav className="header-nav">
                    <span><Link to={prefixLink('/')}>首页</Link></span>
                    <span><Link to={prefixLink('/family/')}>家</Link></span>
                    <span><Link to={prefixLink("/moments/")}>狮子的故事</Link></span>
                    <span><Link to={prefixLink("/foods/")}>美食</Link></span>                    
                    <a href="https://github.com/fangzhou37/WebExperiment">Github</a>
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
