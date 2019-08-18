import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="Michael Claus photo" />
          </a>
          <h1>
            <strong>I am Michael</strong>, a software developer <br />
            and sound designer from San Francisco, CA.
            <br />
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
