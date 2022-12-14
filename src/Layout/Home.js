import React, {useEffect, useState} from "react"
import { listDecks, deleteDeck } from "../utils/api"
import { useHistory } from "react-router-dom"

export default function Home({deckId}){
    const history = useHistory();
    const [deckList, setDeckList] = useState([])
    
  async function loadDecks() {
      const response = await listDecks()
      setDeckList(response);
    }
    
    useEffect(() => {
      loadDecks();
    }, [])
  
    const deleteHandler = async (id) => {
      const deleteAlert = window.confirm( "You will not be able to recover the deck!" );
      if (deleteAlert) {
          await deleteDeck(id);
          loadDecks();
      }
    }
  
  return (
    <div>
      <button onClick={() => history.push("/decks/new")}>+ Create Deck</button>
      <div>
          {deckList.map((deck, index) => 
          <div key={index} className="container"> 
            <div className="row card-header"> 
              <div className="col-10"> 
                <h4>{deck.name}</h4> 
              </div> 
              <div className="col-2"> 
                <p> {deck.cards.length} cards</p> 
              </div> 
          </div> 
          {deck.description}<br/>
            <button className="btn btn-secondary" onClick={() => history.push(`/decks/${deck.id}`)}>View</button>
            <button type="button" className="btn btn-primary bi bi-eye" onClick={() => history.push(`/decks/${deck.id}/study`)}> Study </button>
            <button type="button" className="btn btn-primary" onClick={() => history.push(`/decks/${deck.id}/edit`)}> Edit </button>
            <button type="button" className="btn btn-danger" onClick={() => deleteHandler(deck.id)}> Delete </button>
         </div>)}
      </div>
    </div>
  )}