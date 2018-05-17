import React, {Component} from 'react'
import { connect } from 'react-redux'

class Event extends Component {
  render() {
    return (
      <div id='fh5co-events' data-section='events' style={{ backgroundImage: 'url(lib/images/slide_2.jpg)' }} data-stellar-background-ratio='0.5'>
        <div className='fh5co-overlay'></div>
        <div className='container'>
          <div className='row text-center fh5co-heading row-padded'>
            <div className='col-md-8 col-md-offset-2 to-animate'>
              <h2 className='heading'>Sự kiện</h2>
              <p className='sub-heading'>Các khuyến mãi hấp dẫn cũng như sự kiện được liên tục tổ chức</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='fh5co-event to-animate-2'>
                <h3>Ngày hè náo nhiệt</h3>
                <span className='fh5co-event-meta'>11/06/2018 - 17/06/2018</span>
                <p>Tận hưởng hải sản tươi sống bất tận. Giảm ngay 10% cho thực đơn Hải sản.
                  <br />
                  Ưu đãi dành riêng cho những ngày hè nóng bức oi ả.</p>
                <p><a href='#' className='btn btn-primary btn-outline'>Chi tiết</a></p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='fh5co-event to-animate-2'>
                <h3>Ưu đãi dành cho chủ thẻ MasterCard</h3>
                <span className='fh5co-event-meta'>01/06/2018 - 31/12/2018</span>
                <p>Đánh bay mọi lo âu với thẻ MasterCard trong tay. Chiết khấu 5% đối với khách hàng thanh toán bằng thẻ MasterCard</p>
                <p><a href='#' className='btn btn-primary btn-outline'>Chi tiết</a></p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='fh5co-event to-animate-2'>
                <h3>Nhậu thả ga, về nhà Grab lo!</h3>
                <span className='fh5co-event-meta'>01/06/2018 - 01/07/2018</span>
                <p>Tặng mã giảm giá 50,000 VND cho hóa đơn từ 500,000 VND trở lên. Yên tâm về nhà trong mọi cuộc vui.</p>
                <p><a href='#' className='btn btn-primary btn-outline'>Chi tiết</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  signedIn: state.user.signedIn
})

export default connect(mapStateToProps)(Event)
