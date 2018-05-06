import React, { Component } from 'react'

class Cart extends Component {
  render() {
    return (
      <div id='order-bar' className='row scroll-to-fixed-fixed' data-position='absolute'
        style={{zIndex: '99', position: 'fixed', bottom: '0px', marginLeft: '0px', left: '1192px'}}
      >
        <div className='text-center'>
          <i className='fa fa-cart'></i>
          <span>0 đ</span>
        </div>
      </div>
    )
  }
}

export default Cart
