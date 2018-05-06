import React from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import ReactQueryParams from 'react-query-params'
import { getFoods } from 'lib/actions/food'
import { getCategories } from 'lib/actions/foodCategory'
import { priceToString } from 'lib/objects'

class Menu extends ReactQueryParams {
  componentDidMount() {
    this.props.dispatch(getCategories())
    this.props.dispatch(getFoods())
  }

  render() {
    const { foods, foodCategories } = this.props

    return (
      <div id='fh5co-menus' data-section='menu'>
        <div className='container'>
          <div className='row text-center fh5co-heading row-padded'>
            <div className='col-md-8 col-md-offset-2'>
              <h2 className='heading to-animate'>Thực đơn</h2>
              <p className='sub-heading to-animate'>Thực đơn đa dạng và phong phú với nhiều món ăn đặt sắc từ nhiều vùng miền khác nhau</p>
            </div>
          </div>
          <div className='row row-padded'>
            {foodCategories.map((category, index) => {
              return (
                <div className='col-md-6' key={index}>
                  <div className='fh5co-food-menu to-animate-2'>
                    <h2 className='fh5co-drinks'>{category.name}</h2>
                    <ul>
                      {foods.map((food, foodIndex) => {
                        if (category && category.id === food.foodCategoryId) {
                          const image = R.values(food.imageUrl)

                          return (
                            <li>
                              <div className='fh5co-food-desc'>
                                <figure>
                                  <img src={image} className='img-responsive' alt='Error'/>
                                </figure>
                                <div>
                                  <h3>{food.name}</h3>
                                  <p>{food.description}</p>
                                </div>
                              </div>
                              <div className='fh5co-food-pricing'>{priceToString(food.currentPrice)}</div>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='row'>
            <div className='col-md-4 col-md-offset-4 text-center to-animate-2'>
              <p><a href='#' className='btn btn-primary btn-outline'>More Food Menu</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  foods: state.food.items,
  foodCategories: state.foodCategory.items,
  selectedFood: state.selectedFood.items
})

export default R.pipe(
  connect(mapStateToProps)
)(Menu)
