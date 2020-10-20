import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import Header from '../components/Header'

import sfm_v3 from '../assets/images/thumbs/sfm_v3.png'
import eatery from '../assets/images/thumbs/eatery.png'
import plant_pal from '../assets/images/thumbs/plant pal.png'
import oasis from '../assets/images/thumbs/oasis.png'
import pollux from '../assets/images/thumbs/polluxss.png'
import natours from '../assets/images/thumbs/natours.png'

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
    thumbnail: sfm_v3,
    caption: 'SutroFM.net',
    description: 'Built with React, GatsbyJS & Styled-Components.',
    link: 'https://www.sutrofm.net',
    github: 'https://www.github.com/mclausaudio/sfm_v3',
  },
  {
    id: '1',
    source: full01,
    thumbnail: natours,
    caption: 'Natours',
    description: 'Sass based landing page for fictional company.',
    link: 'https://mc-nature-tours.netlify.com/',
    github: 'https://github.com/mclausaudio/natours',
  },
  {
    id: '2',
    source: full02,
    thumbnail: eatery,
    caption: 'Restaurant Marketing Site',
    description: 'Built with React, Gatsby and Contentful.',
    link: 'https://mc-restaurant-site.netlify.com/',
    github: 'https://github.com/mclausaudio/gatsby-restaurant-site',
  },
  {
    id: '3',
    source: full03,
    thumbnail: plant_pal,
    caption: 'Plant Pal',
    description: 'Python & Flask app with Jinja templating.',
    link: 'https://plant-pal.herokuapp.com/',
    github: 'https://github.com/Ghenet/PlantPal',
  },
  {
    id: '4',
    source: full04,
    thumbnail: oasis,
    caption: 'Oasis',
    description: 'Full Stack "MERN" app.',
    link: 'http://nameless-crag-43595.herokuapp.com/',
    github: 'https://github.com/brandonmcastillo/Oasis-FrontEnd',
  },
  {
    id: '5',
    source: full05,
    thumbnail: pollux,
    caption: 'Pollux',
    description: 'Express, Mongoose, EJS based voting app.',
    link: 'https://pollux-votingapp.herokuapp.com/',
    github: 'https://github.com/mclausaudio/voting-app',
  },
]

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Michael Claus | Portfolio'
    const siteDescription = "Michael Claus' personal website and portfolio"

    return (
      <Layout>
        <Header />
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
              Hello, my name is Michael. I'm a Software Developer from San
              Francisco, California. I am currently working as a Software Engineer at <a href='https://www.postman.com' target='_blank' rel='noreffer noopener'>Postman</a>. I'm also the founder and lead developer of an online radio
              station called{' '}
              <a
                href="https://www.sutrofm.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                SutroFM.net
              </a>.
              I began teaching myself JavaScript in 2015 and continue to use it
              as my primary programing language. I'm also a published musician,
              with releases in a variety of formats ranging from 12" vinyl to
              cassette to digital. Programming, technology and sound are
              passions of mine and I am constantly seeking out new and creative
              ways to fuse them to foster positive social change and
              self-expression.
            </p>
            <ul className="actions">
              {/* <li>
                <a href="#contact" className="button">
                  Contact
                </a>
              </li> */}
              <li>
                <a
                  href="https://docs.google.com/document/d/1rvoSJ9z4dF4LoWEhLi5NUgcjBiVVeCeMFaTVM7BQrU0/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mclausaudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </section>
{/* 
          <section id="two">
            <h2>Web Development Projects</h2>

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
                <a
                  href="https://github.com/mclausaudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  More on GitHub
                </a>
              </li>
            </ul>
          </section> */}

          <section id="contact">
            <h2>Get In Touch</h2>
            <p>
              I'm always open to collaborating on new projects, whether they be
              programming related or otherwise. Feel free to drop me a line!
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form
                  method="post"
                  name="contact-form"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/thankyou"
                >
                  <input
                    type="hidden"
                    name="contact-form"
                    value="contact-form"
                  />
                  <div hidden>
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </div>
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
                        required
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
                  <ul className="actions">
                    <li className="form-submit">
                      <button type="submit" className="button">
                        Submit
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    Nob Hill Area
                    <br />
                    San Francisco, CA 94109
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:mclausaudio@gmail.com">
                      mclausaudio@gmail.com
                    </a>
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
