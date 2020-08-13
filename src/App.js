import React, { Component } from 'react'
import  { fetchTapes } from './tapes-api.js'
import TapeList from './TapeList.js';
import './App.css'

export default class App extends Component {
  state = {
    tapes: []
  }

  componentDidMount = async () => {
    const data = await fetchTapes();
    await this.setState({tapes: data.body})
  }
  render() {
    return (
      <ul>
        {
          this.state.tapes && this.state.tapes.map(tape => <TapeList tape={tape} />)
        }
      </ul>
    )
  }
}

