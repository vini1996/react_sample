import React, { Component } from 'react'
import loading from './Maelstorm.gif'

export default class Spinner extends Component {
  render() {
    return (
        <div className= "text-center justify-content-center" >
                <img src={loading} alt = "loading" />
        </div>
    
    )
  }
}
