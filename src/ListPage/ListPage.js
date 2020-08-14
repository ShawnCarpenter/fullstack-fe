import React, { Component } from 'react'
import  { fetchTapes } from '../tapes-api.js'
import TapeList from './TapeList.js';
import './ListPage.css'

export default class ListPage extends Component {
  state = {
    tapes: []
  }

  componentDidMount = async () => {
    const data = await fetchTapes();
    this.setState({tapes: data.body});
  }
  render() {
    return (
      <ul>
        {
          this.state.tapes && this.state.tapes.map(tape => <TapeList tape={tape} key={tape.id+tape.title} />)
        }
      </ul>
    )
  }
}

