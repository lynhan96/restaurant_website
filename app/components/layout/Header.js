import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { changeModalState } from 'ducks/modal'
import { userHasSignedOut } from 'ducks/user'

class Header extends Component {
  constructor(props, context) {
    super(props, context)

    this.showLoginModal = this.showLoginModal.bind(this)
    this.showRegisterModal = this.showRegisterModal.bind(this)
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.props.dispatch(userHasSignedOut())
  }

  showLoginModal() {
    this.props.dispatch(changeModalState({ orderModal: false, loginModal: true, registerModal: false, forgotPasswordModal: false }))
  }

  showRegisterModal() {
    this.props.dispatch(changeModalState({ orderModal: false, loginModal: false, registerModal: true, forgotPasswordModal: false }))
  }

  render() {
    const { signedIn } = this.props

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
              { !signedIn ? <Link to='#' onClick={e => { e.preventDefault(); this.showLoginModal() }}>Đăng nhập</Link> : ''}
              { !signedIn ? <Link to='#' onClick={e => { e.preventDefault(); this.showRegisterModal() }}>Đăng kí</Link> : ''}
              { signedIn ? <Link to='#'>Trang cá nhân</Link> : ''}
              { signedIn ? <Link to='#' onClick={e => { e.preventDefault(); this.logout() }}>Thoát</Link> : ''}
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
