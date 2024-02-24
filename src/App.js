import React, { Component } from 'react'
import DesktopVersion from './Components/DesktopVersion'
import MobileVersion from './Components/MobileVersion'

export default class App extends Component {
  render() {
    return (
      <div style={{
        overflow: window.innerWidth>=window.innerHeight && window.innerWidth>768 ? 'hidden' : 'scroll'
      }}>
        {window.innerWidth>=window.innerHeight && window.innerWidth>768 && <DesktopVersion/>}
        {!(window.innerWidth>=window.innerHeight && window.innerWidth>768) && <MobileVersion/>}
      </div>
    )
  }
}
