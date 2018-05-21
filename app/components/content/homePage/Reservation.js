import React, {Component} from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import BookTableForm from 'components/form/BookTableForm'
import { submitBookingTable } from 'lib/actions/submit'

class Reservation extends Component {
  render() {
    return (
      <div id='fh5co-contact' data-section='reservation'>
        <div className='container'>
          <div className='row text-center fh5co-heading row-padded'>
            <div className='col-md-8 col-md-offset-2'>
              <h2 className='heading to-animate'>Đặt bàn</h2>
              <p className='sub-heading to-animate'>Khi đặt bàn sẽ có nhân viên hỗ trợ khách hàng gọi điện cho quý khách</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 to-animate-2'>
              <h3>Thông tin liên hệ</h3>
              <ul className='fh5co-contact-info'>
                <li className='fh5co-contact-address '>
                  <i className='icon-home'></i>
                  55 Nguyễn thị minh khai, Quận 1 <br/>Nhà hàng BK Cookery
                </li>
                <li><i className='icon-phone'></i> (123) 465-6789</li>
                <li><i className='icon-envelope'></i>cookery@gmail.com</li>
              </ul>
            </div>
            <div className='col-md-6 to-animate-2'>
              <h3>Để đặt bàn vui lòng điền thông tin vào Form</h3>
              <DecoratedBookTableForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const DecoratedBookTableForm = reduxForm({
  form: 'bookingTable',
  onSubmit: submitBookingTable
})(BookTableForm)

const mapStateToProps = (state) => ({
  signedIn: state.user.signedIn
})

export default connect(mapStateToProps)(Reservation)
