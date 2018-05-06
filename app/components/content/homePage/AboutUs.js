import React from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import ReactQueryParams from 'react-query-params'

class AboutUs extends ReactQueryParams {
  render() {
    return (
      <div>
        <div id="fh5co-about" data-section="about">
          <div className="fh5co-2col fh5co-bg to-animate-2" style={{ backgroundImage: 'url(lib/images/res_img_1.jpg)' }}></div>
          <div className="fh5co-2col fh5co-text">
            <h2 className="heading to-animate">About Us</h2>
            <p className="to-animate"><span className="firstcharacter">F</span>ar far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
            <p className="text-center to-animate"><a href="#" className="btn btn-primary btn-outline">Get in touch</a></p>
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
  foods: state.food.items,
  selectedFood: state.selectedFood.items
})

export default R.pipe(
  connect(mapStateToProps)
)(AboutUs)
