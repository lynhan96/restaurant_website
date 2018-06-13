import React, { Component } from 'react'
import R from 'ramda'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { changeModalState } from 'ducks/modal'
import Slider from 'react-slick'

class EventDetailModal extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.props.dispatch(changeModalState({ eventModal: false, foodModal: false, orderModal: false, loginModal: false, registerModal: false, forgotPasswordModal: false }))
  }

  render() {
    const { events, eventIndex } = this.props
    const event = events[eventIndex]
    let images = []
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    if (event && event.imageUrl) {
      images = R.values(event.imageUrl)
    }

    if (!event) {
      return (
        <div/>
      )
    }

    return (
      <div>
        <Modal
          show={this.props.modal.eventModal}
          onHide={this.handleClose}
          bsSize='large'
        >
          <Modal.Body>
            <Slider {...settings}>
              {images.map((url, index) => {
                return (
                  <div key={index}>
                    <img src={url} className='img-responsive' alt='Food' style={{ height: '400px', objectFit: 'cover', width: '100%' }}/>
                  </div>
                )
              })}
            </Slider>
            <div style={{ marginTop: '20px' }}>
              <p style={{margin: '0'}}>Mô tả sự kiện: </p>
              <div dangerouslySetInnerHTML={{ __html: event.description }} style={{ height: 'auto' }}/>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  events: state.event.items
})

export default connect(mapStateToProps)(EventDetailModal)
