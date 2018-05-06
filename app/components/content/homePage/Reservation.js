import React, {Component} from 'react'
import { connect } from 'react-redux'

class Reservation extends Component {
  render() {
    return (
      <div id='fh5co-contact' data-section='reservation'>
        <div className='container'>
          <div className='row text-center fh5co-heading row-padded'>
            <div className='col-md-8 col-md-offset-2'>
              <h2 className='heading to-animate'>Reserve a Table</h2>
              <p className='sub-heading to-animate'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 to-animate-2'>
              <h3>Contact Info</h3>
              <ul className='fh5co-contact-info'>
                <li className='fh5co-contact-address '>
                  <i className='icon-home'></i>
                  5555 Love Paradise 56 New Clity 5655, <br/>Excel Tower United Kingdom
                </li>
                <li><i className='icon-phone'></i> (123) 465-6789</li>
                <li><i className='icon-envelope'></i>info@freehtml5.co</li>
                <li><i className='icon-globe'></i> <a href='http://freehtml5.co/' target='_blank'>freehtml5.co</a></li>
              </ul>
            </div>
            <div className='col-md-6 to-animate-2'>
              <h3>Reservation Form</h3>
              <div className='form-group '>
                <label htmlFor='name' className='sr-only'>Name</label>
                <input id='name' className='form-control' placeholder='Name' type='text'/>
              </div>
              <div className='form-group '>
                <label htmlFor='email' className='sr-only'>Email</label>
                <input id='email' className='form-control' placeholder='Email' type='email'/>
              </div>
              <div className='form-group'>
                <label htmlFor='occation' className='sr-only'>Occation</label>
                <select className='form-control' id='occation'>
                  <option>Select an Occation</option>
                  <option>Wedding Ceremony</option>
                  <option>Birthday</option>
                  <option>Others</option>
                </select>
              </div>
              <div className='form-group '>
                <label htmlFor='date' className='sr-only'>Date</label>
                <input id='date' className='form-control' placeholder='Date &amp; Time' type='text'/>
              </div>
              <div className='form-group '>
                <label htmlFor='message' className='sr-only'>Message</label>
                <textarea name='' id='message' cols='30' rows='5' className='form-control' placeholder='Message'></textarea>
              </div>
              <div className='form-group '>
                <input className='btn btn-primary' value='Send Message' type='submit'/>
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
