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
                      <p>&ldquo;Chất lượng phục vụ tuyệt vời&rdquo;</p>
                      <p className="quote-author">&mdash; Hà Lê</p>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>&ldquo;Khó có thể bỏ qua Lẫu chua cay khi đến đây&rdquo;</p>
                      <p className="quote-author">&mdash; Thành Nguyễn</p>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>&ldquo;Không gian quá tuyệt cho một bữa tối lãng mạn&rdquo;</p>
                      <p className="quote-author">&mdash; Long Nhật</p>
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
