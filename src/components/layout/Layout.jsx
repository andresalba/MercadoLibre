import React from 'react'
import Header from '../header/Header'

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
