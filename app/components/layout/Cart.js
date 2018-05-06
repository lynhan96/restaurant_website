import React, { Component } from 'react'

class Cart extends Component {
  render() {
    return (
      <div id='order-bar' className='row scroll-to-fixed-fixed' data-position='absolute'
        style={{zIndex: '99', position: 'fixed', bottom: '0px', marginLeft: '0px', left: '1192px'}}
      >
        <div className='order-toggle hide-active text-center'><i className='fa fa-cart'></i><span className='ng-binding'>0 đ</span></div>
        <div className='scroll-wrapper cart-list scrollbar-macosx' style={{ position: 'relative' }}>
          <div className='cart-list scrollbar-macosx scroll-content'
            style={{ height: 'auto', marginBottom: '0px', marginRight: '0px', maxHeight: '0px' }}>
          </div>
          <div className='scroll-element scroll-x'>
            <div className='scroll-element_outer'>
              <div className='scroll-element_size'></div>
              <div className='scroll-element_track'></div>
              <div className='scroll-bar' style={{ width: '96px' }}></div>
            </div>
          </div>
          <div className='scroll-element scroll-y'>
            <div className='scroll-element_outer'>
              <div className='scroll-element_size'></div>
              <div className='scroll-element_track'></div>
              <div className='scroll-bar'></div>
            </div>
          </div>
        </div>
        <div className='cart-item total'>
          <div className='pull-right dish-price cart-total ng-binding'>0 đ</div>
          <div className='clearfix'></div>
        </div>
        <div className='text-center text-white'>
          <a className='btn btn-checkout text-uppercase' href='http://jollibee.com.vn/thanh-toan'>Thanh toán</a>
        </div>
      </div>
    )
  }
}

export default Cart
