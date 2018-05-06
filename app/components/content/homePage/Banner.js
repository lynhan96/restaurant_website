import React, {Component} from 'react'
import { connect } from 'react-redux'

class Banner extends Component {
  render() {
    return (
      <div id='fh5co-home' className='js-fullheight' data-section='home'>
        <div className='flexslider'>
          <div className='fh5co-overlay'></div>
          <div className='fh5co-text'>
            <div className='container'>
              <div className='row'>
                <h1 className='to-animate'>foodee</h1>
                <h2 className='to-animate'>Lovely Designed <span>by</span> <a href='http://freehtml5.co/' target='_blank'>freehtml5.co</a></h2>
              </div>
            </div>
          </div>
          <ul className='slides'>
            <li style={{ backgroundImage: 'url(lib/images/slide_1.jpg)' }} data-stellar-background-ratio='0.5'></li>
            <li style={{ backgroundImage: 'url(lib/images/slide_2.jpg)' }} data-stellar-background-ratio='0.5'></li>
            <li style={{ backgroundImage: 'url(lib/images/slide_3.jpg)' }} data-stellar-background-ratio='0.5'></li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  signedIn: state.user.signedIn
})

export default connect(mapStateToProps)(Banner)
