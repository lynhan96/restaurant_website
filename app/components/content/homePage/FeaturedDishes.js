import React, {Component} from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import { fetchOrderings } from 'lib/actions/ordering'
import { priceToString } from 'lib/objects'

class FeaturedDishes extends Component {
  componentDidMount() {
    this.props.dispatch(fetchOrderings())
  }

  render() {
    const { orderings, foods } = this.props

    return (
      <div id="fh5co-featured" data-section="features">
        <div className="container">
          <div className="row text-center fh5co-heading row-padded">
            <div className="col-md-8 col-md-offset-2">
              <h2 className="heading to-animate">Món ăn được yêu thích nhất</h2>
              <p className="sub-heading to-animate">Top 6 món ăn được khách hàng lựa chọn nhiều nhât</p>
            </div>
          </div>
          <div className="row">
            <div className="fh5co-grid">
              {orderings.map((item, index) => {
                const food = R.find(R.propEq('id', item.id))(foods)
                if (!food) {
                  return <div key={index}/>
                }

                const image = R.values(food.imageUrl)

                return (
                  <div className="fh5co-v-half" key={index}>
                    <div className="fh5co-h-row-2 to-animate-2">
                      <div className="fh5co-v-col-2 fh5co-bg-img" style={{backgroundImage: 'url(' + image + ')' }}></div>
                      <div className="fh5co-v-col-2 fh5co-text arrow-left">
                        <h2>{food.name}</h2>
                        <span className="pricing" style={{ fontSize: '25px' }}>{priceToString(food.currentPrice)}</span>
                        <p>{food.sortDescription}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  foods: state.food.items,
  orderings: state.ordering.items
})

export default R.pipe(
  connect(mapStateToProps)
)(FeaturedDishes)
