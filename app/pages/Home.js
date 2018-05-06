import React from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import ReactQueryParams from 'react-query-params'

import AboutUs from 'components/content/homePage/AboutUs'
import FeaturedDishes from 'components/content/homePage/FeaturedDishes'
import Banner from 'components/content/homePage/Banner'
import Menu from 'components/content/homePage/Menu'
import Event from 'components/content/homePage/Event'
import Reservation from 'components/content/homePage/Reservation'

class Home extends ReactQueryParams {
  render() {
    return (
      <div>
        <Banner />
        <AboutUs/>
        <FeaturedDishes/>
        <Menu/>
        <Event/>
        <Reservation/>
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
)(Home)
