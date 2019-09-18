import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import { Link } from 'gatsby'

class ThankYou extends React.Component {
  render() {
    const siteTitle = 'Thank you!'
    const siteDescription = 'Thank you for your message!'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        <div
          style={{ margin: 'auto', textAlign: 'center', paddingTop: '1rem' }}
        >
          <h1>Thank you for your message!</h1>
          <h2>I will be in contact with you shortly.</h2>
          <Link to="/">Return</Link>
        </div>
      </Layout>
    )
  }
}

export default ThankYou
