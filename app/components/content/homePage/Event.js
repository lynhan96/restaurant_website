import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchEvent } from 'lib/actions/event'
import { changeModalState } from 'ducks/modal'
import EventDetailModal from 'components/modal/EventDetailModal'
import { Link } from 'react-router'

class Event extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      eventIndex: 0
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchEvent())
  }

  showEnvetModal(eventIndex) {
    this.setState({ eventIndex: eventIndex })
    this.props.dispatch(changeModalState({ eventModal: true, foodModal: false, orderModal: false, loginModal: false, registerModal: false, forgotPasswordModal: false }))
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
                    <p className='post__content to-animate'>{item.sortDescription}</p>
                    <p>
                      <Link to='#' className='btn btn-primary btn-outline' onClick={e => { e.preventDefault(); this.showEnvetModal(index) }}>
                        Xem chi tiết
                      </Link>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <EventDetailModal
            eventIndex={this.state.eventIndex}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  event: state.event.items
})

export default connect(mapStateToProps)(Event)
