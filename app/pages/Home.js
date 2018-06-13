import React, {Component} from 'react'

import AboutUs from 'components/content/homePage/AboutUs'
import FeaturedDishes from 'components/content/homePage/FeaturedDishes'
import Banner from 'components/content/homePage/Banner'
import Menu from 'components/content/homePage/Menu'
import Event from 'components/content/homePage/Event'
import Reservation from 'components/content/homePage/Reservation'

class Home extends Component {
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

export default Home
