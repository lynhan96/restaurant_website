import React, {Component} from 'react'
import { ToastContainer } from 'react-toastify'
import Transition from 'react-transition-group/Transition'

import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import Cart from 'components/layout/Cart'
import LoginModal from 'components/modal/LoginModal'
import RegisterModal from 'components/modal/RegisterModal'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'styles/website.less'

const ZoomInAndOut = ({ children, position, ...props }) => (
  <Transition
    {...props}
    timeout={800}
    onEnter={ node => node.classList.add('zoomIn', 'animate')}
    onExit={node => {
      node.classList.remove('zoomIn', 'animate')
      node.classList.add('zoomOut', 'animate')
    }}
  >
    {children}
  </Transition>
)

class App extends Component {
  componentWillUpdate() {
  }

  render() {
    const { children } = this.props

    return (
       <MuiThemeProvider>
        <div id="fh5co-container">
          <Header />
          {children}
          <Footer />
          <Cart />
          <ToastContainer transition={ZoomInAndOut}/>
          <LoginModal />
          <RegisterModal />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
