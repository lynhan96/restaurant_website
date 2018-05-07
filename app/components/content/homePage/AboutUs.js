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
            <h2 className="heading to-animate">Về chúng tôi</h2>
            <p className="to-animate"><span className="firstcharacter">T</span>hưởng thức đặc sản truyền thống cùng các món ăn Tây phương trong một không gian ấm cúng, sang trọng, tiện nghi
                  với hệ thống hút mùi tiêu chuẩn Hàn Quốc sẽ là một trải nghiệm tuyệt vời bên gia đình, bạn bè</p>
            <p className="text-center to-animate">
              <a href="#" className="btn btn-primary btn-outline">Đặt chỗ ngay</a>
            </p>
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
  foods: state.food.items,
  selectedFood: state.selectedFood.items
})

export default R.pipe(
  connect(mapStateToProps)
)(AboutUs)
