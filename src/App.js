import './App.css';
import {useState, useEffect} from 'react'
import SingleCard from './components/SingleCard';

const imgCards = [
  {"src": "./img/helmet-1.png", "match": false},
  {"src": "./img/potion-1.png", "match": false},
  {"src": "./img/ring-1.png", "match": false},
  {"src": "./img/scroll-1.png", "match": false},
  {"src": "./img/shield-1.png", "match": false},
  {"src": "./img/sword-1.png", "match": false}
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
    setTurns(0)
  }

  const choiceHandler = (card) => {
    choice1 ? setChoice2(card) : setChoice1(card)
  }

  useEffect(() => {
    if(choice1 && choice2){
      if(choice1.src === choice2.src){
        setCards(preCards => {
          return (
            preCards.map((card) => {
              if(card.src === choice1.src){
                return {...card, match: true}
              }else{return card}
            })
          )
        })
        resetChoice()
      }else{
        setTimeout(() => resetChoice(), 1000)
      }
    }
  }, [choice1, choice2])

  console.log(cards)

  const resetChoice = () => {
    setChoice1(null)
    setChoice2(null)
    setTurns((prevTurn) => prevTurn+1)
  }

  return (
    <div className='game'>
      <div className='title'>
        <h1>Memory Game</h1>
        <button onClick={fetchCards}>New Game</button>
        <h5>You turns {turns} times</h5>
      </div>
      <div className='imgcard'>
        {cards.map((card) => (
          <SingleCard
            key = {card.id}
            card = {card}
            choiceHandler = {choiceHandler}
            flipped = {card===choice1 || card===choice2 || card.match}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
