import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, useParams, Switch } from "react-router-dom"
import Home from "./Home"
import CreateDeck from "./CreateDeck"
import Deck from "./Deck"
import EditDeck from "./EditDeck"
import NewCard from "./NewCard"
import Study from "./Study"
import EditCard from "./EditCard"

function Layout() {
  const {deckId} = useParams()
  const {cardId} = useParams()

  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
            <Route exact path="/">
              <Home deckId={deckId}/>
            </Route>
            <Route  path="/decks/new">
              <CreateDeck />
            </Route>
            <Route exact path="/decks/:deckId">
              <Deck cardId={cardId}/>
            </Route>
            <Route path="/decks/:deckId/cards/:cardId/edit">
                <EditCard />
              </Route>
              <Route path="/decks/:deckId/edit">
                <EditDeck />
              </Route>
              <Route exact path="/decks/:deckId/cards/new">
                <NewCard />
              </Route>
              <Route path="/decks/:deckId/study">
                <Study />
              </Route>
            <Route>
            <NotFound />
            </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;