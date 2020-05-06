import React, { Component } from 'react'
import axios from 'axios'

class Deck extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       deckID: ''
    }
  }
  
  componentDidMount() {
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle'
    axios.get(url).then(response => {
      console.log(response)
      this.setState({
        deckID: response.data.deck_id
      })
    })
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Deck
