import React from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import ReactQueryParams from 'react-query-params'
import { getFoods, filterByCategoryId } from 'lib/actions/food'
import { getCategories } from 'lib/actions/foodCategory'
import { priceToString } from 'lib/objects'

class Menu extends ReactQueryParams {
  constructor(props, context) {
    super(props, context)

    this.filterFood = this.filterFood.bind(this)
    this.state = {
      foods: []
    }
  }

  filterFood(categoryId) {
    this.props.dispatch(filterByCategoryId(categoryId))
  }

  componentDidMount() {
    this.props.dispatch(getCategories())
    this.props.dispatch(getFoods())
  }

  render() {
    const { foodCategories, foodState } = this.props
    let filteredFoods = foodState.items

    if (foodState.filterByCategory > 0) {
      filteredFoods = R.filter(item => item.foodCategoryId === foodState.filterByCategory)(foodState.items)
    }

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
            <div className='pricing-filter'>
              <div className='pricing-filter-wrapper'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-10 col-md-offset-1'>
                      <ul id='filter-list' className='clearfix'>
                        <li
                          className={foodState.filterByCategory === 0 ? 'filter active' : 'filter'}
                          data-filter='all'
                          onClick={e => { e.preventDefault(); this.filterFood(0) }}
                        >All</li>
                        {foodCategories.map((category, index) => {
                          return (
                            <li
                              key={index}
                              className={foodState.filterByCategory === category.id ? 'filter active' : 'filter'}
                              onClick={e => { e.preventDefault(); this.filterFood(category.id) }}
                            >{category.name}</li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='container'>
              <div className='row'>
                <div className='col-md-10 col-md-offset-1'>
                  <ul id='menu-pricing' className='menu-price'>
                    {filteredFoods.map((food, foodIndex) => {
                      const image = R.values(food.imageUrl)
                      return (
                        <li className='item' key={foodIndex}>
                          <a href='#'>
                            <img src={image} className='img-responsive' alt='Food' />
                            <div className='menu-desc text-center'>
                              <span>
                                <h3>{food.name}</h3>
                                {food.description}
                            </span>
                            </div>
                          </a>
                          <h2 className='white'>{priceToString(food.currentPrice)}</h2>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
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
  foodState: state.food,
  foodCategories: state.foodCategory.items,
  selectedFood: state.selectedFood.items
})

export default R.pipe(
  connect(mapStateToProps)
)(Menu)
