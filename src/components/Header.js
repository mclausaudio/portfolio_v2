import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/cropped.png'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="/" className="image avatar">
            <img src={avatar} alt="Michael Claus" />
          </a>
          <h1>
            <strong>Hello! I'm Michael</strong>, a software developer <br />
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
