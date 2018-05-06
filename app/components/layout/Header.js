import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { changeOrderModal } from 'ducks/modal'

class Header extends Component {
  constructor(props, context) {
    super(props, context)

    this.showLoginModal = this.showLoginModal.bind(this)
  }

  showLoginModal() {
    this.props.dispatch(changeOrderModal({ orderModal: false, loginModal: true, registerModal: false, forgotPasswordModal: false }))
  }

  showRegisterModal() {
    this.props.dispatch(changeOrderModal({ orderModal: false, loginModal: false, registerModal: true, forgotPasswordModal: false }))
  }

  render() {
    return (
      <div className='js-sticky'>
        <div className='fh5co-main-nav'>
          <div className='container-fluid'>
            <div className='fh5co-menu-1'>
              <a href='#' data-nav-section='home'>Trang chủ</a>
              <a href='#' data-nav-section='about'>Giới thiệu</a>
              <a href='#' data-nav-section='features'>Thức ăn nổi bật</a>
              <a href='#' data-nav-section='menu'>Thực đơn</a>
            </div>
            <div className='fh5co-logo'>
              <a href='#' data-nav-section='home'>BK Cookery</a>
            </div>
            <div className='fh5co-menu-2'>
              <a href='#' data-nav-section='events'>Sự kiện</a>
              <a href='#' data-nav-section='reservation'>Đặt bàn</a>
              <Link to='#' onClick={e => { e.preventDefault(); this.showLoginModal() }}>Đăng nhập</Link>
              <Link to='#' onClick={e => { e.preventDefault(); this.showRegisterModal() }}>Đăng kí</Link>
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
