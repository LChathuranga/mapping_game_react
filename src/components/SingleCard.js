import './SingleCard.css'

const SingleCard = ({card, choiceHandler, flipped}) => {
    return ( 
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img src={card.src} alt="front" className='front' />
                <img src="./img/cover.png" alt="back" className='back' onClick={() => choiceHandler(card)} />
            </div>
          </div>
     );
}
 
export default SingleCard;