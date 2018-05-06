import React from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import ReactQueryParams from 'react-query-params'
class FeaturedDishes extends ReactQueryParams {
  render() {
    return (
      <div id="fh5co-featured" data-section="features">
        <div className="container">
          <div className="row text-center fh5co-heading row-padded">
            <div className="col-md-8 col-md-offset-2">
              <h2 className="heading to-animate">Featured Dishes</h2>
              <p className="sub-heading to-animate">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
          <div className="row">
            <div className="fh5co-grid">
              <div className="fh5co-v-half to-animate-2">
                <div className="fh5co-v-col-2 fh5co-bg-img" style={{ backgroundImage: 'url(lib/images/res_img_1.jpg)' }}></div>
                <div className="fh5co-v-col-2 fh5co-text fh5co-special-1 arrow-left">
                  <h2>Fresh Mushrooms</h2>
                  <span className="pricing">$7.50</span>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
              <div className="fh5co-v-half">
                <div className="fh5co-h-row-2 to-animate-2">
                  <div className="fh5co-v-col-2 fh5co-bg-img" style={{ backgroundImage: 'url(lib/images/res_img_2.jpg)' }}></div>
                  <div className="fh5co-v-col-2 fh5co-text arrow-left">
                    <h2>Grilled Chiken Salad</h2>
                    <span className="pricing">$12.00</span>
                    <p>Far far away, behind the word mountains.</p>
                  </div>
                </div>
                <div className="fh5co-h-row-2 fh5co-reversed to-animate-2">
                  <div className="fh5co-v-col-2 fh5co-bg-img" style={{ backgroundImage: 'url(lib/images/res_img_8.jpg)' }}></div>
                  <div className="fh5co-v-col-2 fh5co-text arrow-right">
                    <h2>Cheese and Garlic Toast</h2>
                    <span className="pricing">$4.50</span>
                    <p>Far far away, behind the word mountains.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  foods: state.food.items,
  selectedFood: state.selectedFood.items
})

export default R.pipe(
  connect(mapStateToProps)
)(FeaturedDishes)
