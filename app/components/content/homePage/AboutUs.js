import React from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import ReactQueryParams from 'react-query-params'
import { fetchAboutUs } from 'lib/actions/aboutUs'

class AboutUs extends ReactQueryParams {
  componentDidMount() {
    this.props.dispatch(fetchAboutUs())
  }

  render() {
    const {aboutUs} = this.props

    const imageUrl = R.values(aboutUs[0].imageUrl).length > 0 ? 'url(' + R.values(aboutUs[0].imageUrl)[0] + ')' : 'url(lib/images/res_img_1.jpg)'

    return (
      <div>
        <div id="fh5co-about" data-section="about">
          <div className="fh5co-2col fh5co-bg to-animate-2" style={{ backgroundImage: imageUrl }}></div>
          <div className="fh5co-2col fh5co-text">
            <h2 className="heading to-animate">Giới thiệu</h2>
            <p className="post__content to-animate" dangerouslySetInnerHTML={{__html: aboutUs[0].description}}></p>
          </div>
        </div>

        <div id="fh5co-sayings">
          <div className="container">
            <div className="row to-animate">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>&ldquo;Cooking is an art, but all art requires knowing something about the techniques and materials&rdquo;</p>
                      <p className="quote-author">&mdash; Nathan Myhrvold</p>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>&ldquo;Give a man food, and he can eat for a day. Give a man a job, and he can only eat for 30 minutes on break.&rdquo;</p>
                      <p className="quote-author">&mdash; Lev L. Spiro</p>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>&ldquo;Find something you’re passionate about and keep tremendously interested in it.&rdquo;</p>
                      <p className="quote-author">&mdash; Julia Child</p>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>&ldquo;Never work before breakfast; if you have to work before breakfast, eat your breakfast first.&rdquo;</p>
                      <p className="quote-author">&mdash; Josh Billings</p>
                    </blockquote>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  aboutUs: state.aboutUs.items
})

export default R.pipe(
  connect(mapStateToProps)
)(AboutUs)
