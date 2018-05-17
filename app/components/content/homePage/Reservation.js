import React, {Component} from 'react'
import { connect } from 'react-redux'

class Reservation extends Component {
  render() {
    return (
      <div id='fh5co-contact' data-section='reservation'>
        <div className='container'>
          <div className='row text-center fh5co-heading row-padded'>
            <div className='col-md-8 col-md-offset-2'>
              <h2 className='heading to-animate'>Đặt chỗ ngay</h2>
              <p className='sub-heading to-animate'>Đặt chỗ ngay để tận hưởng dịch vụ chất lượng quốc tế</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 to-animate-2'>
              <h3>Thông tin liên hệ</h3>
              <ul className='fh5co-contact-info'>
                <li className='fh5co-contact-address '>
                  <i className='icon-home'></i>
                  123 Nguyễn Huệ, Đa Kao, Quận 1, <br/>Thành phố Hồ Chí Minh
                </li>
                <li><i className='icon-phone'></i> (54) 465-6789</li>
                <li><i className='icon-envelope'></i>info@bkcookery.com</li>
                <li><i className='icon-globe'></i> <a href='#'>bkcookery.com</a></li>
              </ul>
            </div>
            <div className='col-md-6 to-animate-2'>
              <h3>Form đặt chỗ</h3>
              <div className='form-group '>
                <label htmlFor='name' className='sr-only'>Tên</label>
                <input id='name' className='form-control' placeholder='Tên' type='text'/>
              </div>
              <div className='form-group '>
                <label htmlFor='email' className='sr-only'>Email</label>
                <input id='email' className='form-control' placeholder='Email' type='email'/>
              </div>
              <div className='form-group'>
                <label htmlFor='occation' className='sr-only'>Nhân dịp</label>
                <select className='form-control' id='occation'>
                  <option>Chọn</option>
                  <option>Kỷ niệm ngày cưới</option>
                  <option>Sinh nhật</option>
                  <option>Sự kiện</option>
                  <option>Khác</option>
                </select>
              </div>
              <div className='form-group '>
                <label htmlFor='number-people' className='sr-only'>Số người</label>
                <input id='number-people' className='form-control' placeholder='Số người' type='number'/>
              </div>
              <div className='form-group '>
                <label htmlFor='date' className='sr-only'>Ngày giờ</label>
                <input id='date' className='form-control date-time' placeholder='Ngày giờ &amp; Time' type='text'/>
              </div>
              <div className='form-group '>
                <label htmlFor='message' className='sr-only'>Ghi chú</label>
                <textarea name='' id='message' cols='30' rows='5' className='form-control'
                placeholder='Ghi chú'></textarea>
              </div>
              <div className='form-group '>
                <input className='btn btn-primary' value='Đặt chỗ ngay' type='submit'/>
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

export default connect(mapStateToProps)(Reservation)
