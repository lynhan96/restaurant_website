import React from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import ReactQueryParams from 'react-query-params'
class Menu extends ReactQueryParams {
  render() {
    return (
      <div id='fh5co-menus' data-section='menu'>
        <div className='container'>
          <div className='row text-center fh5co-heading row-padded'>
            <div className='col-md-8 col-md-offset-2'>
              <h2 className='heading to-animate'>Food Menu</h2>
              <p className='sub-heading to-animate'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
          <div className='row row-padded'>
            <div className='col-md-6'>
              <div className='fh5co-food-menu to-animate-2'>
                <h2 className='fh5co-drinks'>Drinks</h2>
                <ul>
                  <li>
                    <div className='fh5co-food-desc'>
                      <figure>
                        <img src='lib/images/res_img_5.jpg' className='img-responsive' alt='Free HTML5 Templates by FREEHTML5.co'/>
                      </figure>
                      <div>
                        <h3>Pineapple Juice</h3>
                        <p>Far far away, behind the word mountains.</p>
                      </div>
                    </div>
                    <div className='fh5co-food-pricing'>
                      $17.50
                    </div>
                  </li>
                  <li>
                    <div className='fh5co-food-desc'>
                      <figure>
                        <img src='lib/images/res_img_6.jpg' className='img-responsive' alt='Free HTML5 Templates by FREEHTML5.co'/>
                      </figure>
                      <div>
                        <h3>Green Juice</h3>
                        <p>Far far away, behind the word mountains.</p>
                      </div>
                    </div>
                    <div className='fh5co-food-pricing'>
                      $7.99
                    </div>
                  </li>
                  <li>
                    <div className='fh5co-food-desc'>
                      <figure>
                        <img src='lib/images/res_img_7.jpg' className='img-responsive' alt='Free HTML5 Templates by FREEHTML5.co'/>
                      </figure>
                      <div>
                        <h3>Soft Drinks</h3>
                        <p>Far far away, behind the word mountains.</p>
                      </div>
                    </div>
                    <div className='fh5co-food-pricing'>
                      $12.99
                    </div>
                  </li>
                  <li>
                    <div className='fh5co-food-desc'>
                      <figure>
                        <img src='lib/images/res_img_5.jpg' className='img-responsive' alt='Free HTML5 Templates by FREEHTML5.co'/>
                      </figure>
                      <div>
                        <h3>Carlo Rosee Drinks</h3>
                        <p>Far far away, behind the word mountains.</p>
                      </div>
                    </div>
                    <div className='fh5co-food-pricing'>
                      $12.99
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='fh5co-food-menu to-animate-2'>
                <h2 className='fh5co-dishes'>Steak</h2>
                <ul>
                  <li>
                    <div className='fh5co-food-desc'>
                      <figure>
                        <img src='lib/images/res_img_3.jpg' className='img-responsive' alt='Free HTML5 Templates by FREEHTML5.co'/>
                      </figure>
                      <div>
                        <h3>Beef Steak</h3>
                        <p>Far far away, behind the word mountains.</p>
                      </div>
                    </div>
                    <div className='fh5co-food-pricing'>
                      $17.50
                    </div>
                  </li>
                  <li>
                    <div className='fh5co-food-desc'>
                      <figure>
                        <img src='lib/images/res_img_4.jpg' className='img-responsive' alt='Free HTML5 Templates by FREEHTML5.co'/>
                      </figure>
                      <div>
                        <h3>Tomato with Chicken</h3>
                        <p>Far far away, behind the word mountains.</p>
                      </div>
                    </div>
                    <div className='fh5co-food-pricing'>
                      $7.99
                    </div>
                  </li>
                  <li>
                    <div className='fh5co-food-desc'>
                      <figure>
                        <img src='lib/images/res_img_2.jpg' className='img-responsive' alt='Free HTML5 Templates by FREEHTML5.co'/>
                      </figure>
                      <div>
                        <h3>Sausages from Italy</h3>
                        <p>Far far away, behind the word mountains.</p>
                      </div>
                    </div>
                    <div className='fh5co-food-pricing'>
                      $12.99
                    </div>
                  </li>
                  <li>
                    <div className='fh5co-food-desc'>
                      <figure>
                        <img src='lib/images/res_img_8.jpg' className='img-responsive' alt='Free HTML5 Templates by FREEHTML5.co'/>
                      </figure>
                      <div>
                        <h3>Beef Grilled</h3>
                        <p>Far far away, behind the word mountains.</p>
                      </div>
                    </div>
                    <div className='fh5co-food-pricing'>
                      $12.99
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='fh5co-food-menu to-animate-2'>
                <h2 className='fh5co-drinks'>Drinks</h2>
                <ul>
                  <li>
                    <div className='fh5co-food-desc'>
                      <figure>
                        <img src='lib/images/res_img_5.jpg' className='img-responsive' alt='Free HTML5 Templates by FREEHTML5.co'/>
                      </figure>
                      <div>
                        <h3>Pineapple Juice</h3>
                        <p>Far far away, behind the word mountains.</p>
                      </div>
                    </div>
                    <div className='fh5co-food-pricing'>
                      $17.50
                    </div>
                  </li>
                  <li>
                    <div className='fh5co-food-desc'>
                      <figure>
                        <img src='lib/images/res_img_6.jpg' className='img-responsive' alt='Free HTML5 Templates by FREEHTML5.co'/>
                      </figure>
                      <div>
                        <h3>Green Juice</h3>
                        <p>Far far away, behind the word mountains.</p>
                      </div>
                    </div>
                    <div className='fh5co-food-pricing'>
                      $7.99
                    </div>
                  </li>
                  <li>
                    <div className='fh5co-food-desc'>
                      <figure>
                        <img src='lib/images/res_img_7.jpg' className='img-responsive' alt='Free HTML5 Templates by FREEHTML5.co'/>
                      </figure>
                      <div>
                        <h3>Soft Drinks</h3>
                        <p>Far far away, behind the word mountains.</p>
                      </div>
                    </div>
                    <div className='fh5co-food-pricing'>
                      $12.99
                    </div>
                  </li>
                  <li>
                    <div className='fh5co-food-desc'>
                      <figure>
                        <img src='lib/images/res_img_5.jpg' className='img-responsive' alt='Free HTML5 Templates by FREEHTML5.co'/>
                      </figure>
                      <div>
                        <h3>Carlo Rosee Drinks</h3>
                        <p>Far far away, behind the word mountains.</p>
                      </div>
                    </div>
                    <div className='fh5co-food-pricing'>
                      $12.99
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='fh5co-food-menu to-animate-2'>
                <h2 className='fh5co-dishes'>Steak</h2>
                <ul>
                  <li>
                    <div className='fh5co-food-desc'>
                      <figure>
                        <img src='lib/images/res_img_3.jpg' className='img-responsive' alt='Free HTML5 Templates by FREEHTML5.co'/>
                      </figure>
                      <div>
                        <h3>Beef Steak</h3>
                        <p>Far far away, behind the word mountains.</p>
                      </div>
                    </div>
                    <div className='fh5co-food-pricing'>
                      $17.50
                    </div>
                  </li>
                  <li>
                    <div className='fh5co-food-desc'>
                      <figure>
                        <img src='lib/images/res_img_4.jpg' className='img-responsive' alt='Free HTML5 Templates by FREEHTML5.co'/>
                      </figure>
                      <div>
                        <h3>Tomato with Chicken</h3>
                        <p>Far far away, behind the word mountains.</p>
                      </div>
                    </div>
                    <div className='fh5co-food-pricing'>
                      $7.99
                    </div>
                  </li>
                  <li>
                    <div className='fh5co-food-desc'>
                      <figure>
                        <img src='lib/images/res_img_2.jpg' className='img-responsive' alt='Free HTML5 Templates by FREEHTML5.co'/>
                      </figure>
                      <div>
                        <h3>Sausages from Italy</h3>
                        <p>Far far away, behind the word mountains.</p>
                      </div>
                    </div>
                    <div className='fh5co-food-pricing'>
                      $12.99
                    </div>
                  </li>
                  <li>
                    <div className='fh5co-food-desc'>
                      <figure>
                        <img src='lib/images/res_img_8.jpg' className='img-responsive' alt='Free HTML5 Templates by FREEHTML5.co'/>
                      </figure>
                      <div>
                        <h3>Beef Grilled</h3>
                        <p>Far far away, behind the word mountains.</p>
                      </div>
                    </div>
                    <div className='fh5co-food-pricing'>
                      $12.99
                    </div>
                  </li>
                </ul>
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
  foods: state.food.items,
  selectedFood: state.selectedFood.items
})

export default R.pipe(
  connect(mapStateToProps)
)(Menu)
