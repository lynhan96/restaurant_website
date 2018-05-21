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
