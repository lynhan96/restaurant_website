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
              <h2 className='heading'>Upcoming Events</h2>
              <p className='sub-heading'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='fh5co-event to-animate-2'>
                <h3>Kitchen Workshops</h3>
                <span className='fh5co-event-meta'>March 19th, 2016</span>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p><a href='#' className='btn btn-primary btn-outline'>Read More</a></p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='fh5co-event to-animate-2'>
                <h3>Music Concerts</h3>
                <span className='fh5co-event-meta'>March 19th, 2016</span>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p><a href='#' className='btn btn-primary btn-outline'>Read More</a></p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='fh5co-event to-animate-2'>
                <h3>Free to Eat Party</h3>
                <span className='fh5co-event-meta'>March 19th, 2016</span>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p><a href='#' className='btn btn-primary btn-outline'>Read More</a></p>
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
