import React, {Component} from 'react'
import { connect } from 'react-redux'

class Footer extends Component {
  render() {
    return (
      <div id='fh5co-footer'>
        <div className='container'>
          <div className='row row-padded'>
            <div className='col-md-12 text-center'>
              <p className='to-animate'>
                &copy; 2018 BK Cookery.
                <br/> All Rights Reserved
              </p>
              <p className='text-center to-animate'><a href='#' className='js-gotop'>Go To Top</a></p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <ul className='fh5co-social'>
                <li className='to-animate-2'><a href='//www.facebook.com/bkcookeryoffical/'><i className='icon-facebook'></i></a></li>
                <li className='to-animate-2'><a href='#'><i className='icon-twitter'></i></a></li>
                <li className='to-animate-2'><a href='#'><i className='icon-instagram'></i></a></li>
              </ul>
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

export default connect(mapStateToProps)(Footer)
