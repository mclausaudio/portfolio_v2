import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'SutroFM.net',
    description: 'Built with React, GatsbyJS & Styled-Components.',
    link: 'https://www.sutrofm.net',
    github: 'https://www.github.com/mclausaudio/sfm_v3',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Restaurant Marketing Site',
    description: 'Built with React, Gatsby and Contentful.',
    link: 'https://mc-restaurant-site.netlify.com/',
    github: 'https://github.com/mclausaudio/gatsby-restaurant-site',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Plant Pal',
    description: 'Full stack Python & Flask app with Jinja templating.',
    link: 'https://plant-pal.herokuapp.com/',
    github: 'https://github.com/Ghenet/PlantPal',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Oasis',
    description: 'Full Stack "MERN" app.',
    link: 'http://nameless-crag-43595.herokuapp.com/',
    github: 'https://github.com/brandonmcastillo/Oasis-FrontEnd',
  },
  {
    id: '5',
    source: full05,
    thumbnail: thumb05,
    caption: 'Pollux',
    description: 'Express, Mongoose, EJS based voting app.',
    link: 'https://pollux-votingapp.herokuapp.com/',
    github: 'https://github.com/mclausaudio/voting-app',
  },
  {
    id: '6',
    source: full06,
    thumbnail: thumb06,
    caption: 'Photo 6',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    link: 'https://ambient-forum.herokuapp.com/posts',
    github: 'https://github.com/mclausaudio/ambientforum',
  },
]

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Michael Claus | Portfolio'
    const siteDescription = "Michael Claus' personal website and portfolio"

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                Michael Claus
                <br />
                Full Stack Developer | Sound Designer
              </h2>
            </header>
            <p>
              Hello, my name is Michael. I'm a Full Stack Developer from San
              Francisco, California. I'm the founder of an online radio station
              called{' '}
              <a href="https://www.sutrofm.net" target="_blank">
                SutroFM.net
              </a>{' '}
              and a record label called{' '}
              <a
                href="https://www.soundcloud.com/silva-electronics"
                target="_blank"
              >
                Silva Electronics.
              </a>{' '}
              I began teaching myself JavaScript in 2014 and continue to use it
              as my primary programing language. I'm also a published musician,
              with releases in a variety of formats ranging from 12" vinyl to
              cassette to digital. Programming, technology and sound are
              passions of mine and I am constantly seeking out new and creative
              ways to fuse them to foster positive social change and
              self-expression.
            </p>
            <ul className="actions">
              <li>
                <a href="#contact" className="button">
                  Contact Me
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({
                  id,
                  source,
                  thumbnail,
                  caption,
                  description,
                  link,
                  github,
                }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                  link,
                  github,
                })
              )}
            />

            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul>
          </section>

          <section id="contact">
            <h2>Get In Touch</h2>
            <p>
              I'm always open to collaborating on new projects, whether they be
              programming related or otherwise. Feel free to drop me a line!
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="POST" name="contact" data-netlify="true">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    1234 Somewhere Rd.
                    <br />
                    San Francisco, CA 94122
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    000-000-0000
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">mclausaudio@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
