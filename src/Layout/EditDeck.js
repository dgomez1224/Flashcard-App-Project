import React, {useState, useEffect} from "react"
import {useParams, Link, useHistory} from "react-router-dom"
import { readDeck, updateDeck } from "../utils/api";
import DeckLayout from "./DeckLayout"


export default function EditDeck () {
    const initialFormState = {
      name: "",
      description: "",
    };
    const params = useParams();
    const deckId = params.deckId;
    const [deck, setDeck] = useState({ ...initialFormState });
    useEffect(() => {
      async function loadData() {
        try {
          const dataFromAPI = await readDeck(deckId);
          setDeck(dataFromAPI);
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("Aborted");
          } else {
            throw error;
          }
        }
      }
      loadData();
    }, [deckId]);
  
    const handleChange = ({ target }) => {
      const value = target.value;
      setDeck({
        ...deck,
        [target.name]: value,
      });
    };
    const history = useHistory();
    const handleSubmit = (event) => {
      event.preventDefault();
  
      async function updateData() {
        try {
          await updateDeck(deck);
          history.push(`/decks/${deckId}`);
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("Aborted");
          } else {
            throw error;
          }
        }
      }
      updateData();
    };
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" key="0">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item" key="1">
              <Link to={`/decks/${deckId}`}>Deck Name</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page" key="2">
              Edit Deck
            </li>
          </ol>
        </nav>
        <br />
  
        <h2>Edit Deck</h2>
  
        <form onSubmit={handleSubmit}>
          <DeckLayout formData={deck} handleChange={handleChange} />
          <Link to={`/decks/${deckId}`} className="btn btn-secondary">
            Cancel
          </Link>{" "}
          &nbsp;
          <button type="submit" value="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }