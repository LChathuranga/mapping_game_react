import './SingleCard.css'

const SingleCard = ({card, choiceHandler}) => {
    return ( 
        <div className="card">
            <img src={card.src} alt="front" className='front' />
            <img src="./img/cover.png" alt="back" className='back' onClick={() => choiceHandler(card)} />
          </div>
     );
}
 
export default SingleCard;