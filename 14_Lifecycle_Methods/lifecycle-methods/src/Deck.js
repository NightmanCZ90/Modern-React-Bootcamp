import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios'
import './Deck.css'
const API_BASE_URL = 'https://deckofcardsapi.com/api/deck'

class Deck extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       deck: '',
       cards: []
    }
    this.getCard = this.getCard.bind(this)
  }
  
  async componentDidMount() {
    const url = `${API_BASE_URL}/new/shuffle`
    axios.get(url).then(response => {
      console.log(response)
      this.setState({
        deck: response.data,
      })
    })
  }
  async getCard(){
    try {
      const url = `${API_BASE_URL}/${this.state.deck.deck_id}/draw/`
      let cardRes = await axios.get(url)
      if(!cardRes.data.success) {
        throw new Error("No card remaining")
      }
      console.log(cardRes.data)
      let card = cardRes.data.cards[0]
      this.setState(st => ({
        cards: [...st.cards, {
          id: card.code,
          image: card.image,
          name: `${card.value} of ${card.suit}`
        }]
      }))
    } catch (err) {
      alert(err)
    }
  }

  render() {
    const cards = this.state.cards.map(c => (
      <Card key={c.id} name={c.name} image={c.image} />
    ))
    return (
      <div className='Deck' >
        <h1 className='Deck-title' >Card Dealer</h1>
        <h2 className='Deck-title subtitle' >A little demo made with React</h2>
        <button className='Deck-btn' onClick={this.getCard} >Draw a card</button>
        <div className='Deck-cardarea'>{cards}</div>
      </div>
    )
  }
}

export default Deck
