import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import R from 'ramda'
import ReactQueryParams from 'react-query-params'
import { getFoods, filterByCategoryId } from 'lib/actions/food'
import { getCategories } from 'lib/actions/foodCategory'
import { priceToString } from 'lib/objects'
import { changeModalState } from 'ducks/modal'
import FoodDetailModal from 'components/modal/FoodDetailModal'

class Menu extends ReactQueryParams {
  constructor(props, context) {
    super(props, context)

    this.filterFood = this.filterFood.bind(this)

    this.state = {
      foodIndex: 0
    }
  }

  filterFood(categoryId) {
    this.props.dispatch(filterByCategoryId(categoryId))
  }

  showFoodDetailModal(foodIndex) {
    this.setState({ foodIndex: foodIndex })
    this.props.dispatch(changeModalState({  enventModal: false, foodModal: true, orderModal: false, loginModal: false, registerModal: false, forgotPasswordModal: false }))
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
                        >Tất cả</li>
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
                          <Link to='#' onClick={e => { e.preventDefault(); this.showFoodDetailModal(foodIndex) }}>
                            <img src={image[0]} className='img-responsive' alt='Food' />
                            <div className='menu-desc text-center'>
                              <span>
                                <h3>{food.name}</h3>
                                {food.sortDescription}
                            </span>
                            </div>
                          </Link>
                          <h3 className='food-name'>{food.name}</h3>
                          <h2 style={{ color: 'white' }}>{priceToString(food.currentPrice)}</h2>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <FoodDetailModal
              foodIndex={this.state.foodIndex}
            />
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
