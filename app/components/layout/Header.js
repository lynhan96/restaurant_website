import React, {Component} from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    return (
      <div className='js-sticky'>
        <div className='fh5co-main-nav'>
          <div className='container-fluid'>
            <div className='fh5co-menu-1'>
              <a href='#' data-nav-section='home'>Home</a>
              <a href='#' data-nav-section='about'>About</a>
              <a href='#' data-nav-section='features'>Features</a>
            </div>
            <div className='fh5co-logo'>
              <a href='#' data-nav-section='home'>foodee</a>
            </div>
            <div className='fh5co-menu-2'>
              <a href='#' data-nav-section='menu'>Menu</a>
              <a href='#' data-nav-section='events'>Events</a>
              <a href='#' data-nav-section='reservation'>Reservation</a>
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

export default connect(mapStateToProps)(Header)
