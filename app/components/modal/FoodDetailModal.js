import React, { Component } from 'react'
import R from 'ramda'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { changeModalState } from 'ducks/modal'
import { priceToString } from 'lib/objects'
import Slider from 'react-slick'

class FoodDetailModal extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.props.dispatch(changeModalState({ foodModal: false, orderModal: false, loginModal: false, registerModal: false, forgotPasswordModal: false }))
  }

  render() {
    const { foods, foodIndex } = this.props
    const foodDetail = foods[foodIndex]
    let images = []
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    if (foodDetail && foodDetail.imageUrl) {
      images = R.values(foodDetail.imageUrl)
    }

    if (!foodDetail) {
      return (
        <div/>
      )
    }

    return (
      <div>
        <Modal
          show={this.props.modal.foodModal}
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
              <p style={{margin: '0'}}>{'Gía mới: ' + priceToString(foodDetail.currentPrice)}</p>
            </div>
            <div style={{ marginTop: '20px' }}>
              <p style={{margin: '0'}}>{'Gía cũ: ' + priceToString(foodDetail.oldPrice)}</p>
            </div>
            <div style={{ marginTop: '20px' }}>
              <p style={{margin: '0'}}>Mô tả món ăn: </p>
              <div dangerouslySetInnerHTML={{ __html: foodDetail.description }} style={{ height: 'auto' }}/>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  foods: state.food.items
})

export default connect(mapStateToProps)(FoodDetailModal)
