import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchEvent } from 'lib/actions/event'

class Event extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEvent())
  }

  render() {
    const { event } = this.props

    return (
      <div id='fh5co-events' data-section='events' style={{ backgroundImage: 'url(lib/images/slide_2.jpg)' }} data-stellar-background-ratio='0.5'>
        <div className='fh5co-overlay'></div>
        <div className='container'>
          <div className='row text-center fh5co-heading row-padded'>
            <div className='col-md-8 col-md-offset-2 to-animate'>
              <h2 className='heading'>Sự kiện</h2>
              <p className='sub-heading'>Rất nhiều sự kiện hấp dẫn đang diễn ra với nhiều ưu đãi cực lớn</p>
            </div>
          </div>
          <div className='row'>
            {event.map((item, index) => {
              return (
                <div className='col-md-4' key={index}>
                  <div className='fh5co-event to-animate-2'>
                    <h3>{item.name}</h3>
                    <span className='fh5co-event-meta'></span>
                    <p className="post__content to-animate" dangerouslySetInnerHTML={{__html: item.description}}></p>
                    <p><a href='#' className='btn btn-primary btn-outline'>Read More</a></p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  event: state.event.items
})

export default connect(mapStateToProps)(Event)
