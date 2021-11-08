import './App.css';
import {useState} from 'react'
import SingleCard from './components/SingleCard';

const imgCards = [
  {"src": "./img/helmet-1.png"},
  {"src": "./img/potion-1.png"},
  {"src": "./img/ring-1.png"},
  {"src": "./img/scroll-1.png"},
  {"src": "./img/shield-1.png"},
  {"src": "./img/sword-1.png"}
]

function App() {

  const [cards, setCards] = useState([]) 
  const [turns, setTurns] = useState(0)
  const [choice1, setChoice1] = useState(null)
  const [choice2, setChoice2] = useState(null)

  const fetchCards = () => {
    const fetchCards = [...imgCards, ...imgCards]
    .sort(() => Math.random()-0.5)
    .map((card) => ({...card, id: Math.random()}))

    setCards(fetchCards)
  }

  const choiceHandler = (card) => {
    console.log(card)
  }

  const resetChoice = () => {
    setChoice1(null)
    setChoice2(null)
  }

  return (
    <div className='game'>
      <div className='title'>
        <h1>Memory Game</h1>
        <button onClick={fetchCards}>New Game</button>
      </div>
      <div className='imgcard'>
        {cards.map((card) => (
          <SingleCard
            key = {card.id}
            card = {card}
            choiceHandler = {choiceHandler}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
