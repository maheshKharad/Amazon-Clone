
const Card = () => {
    return(
        <div className="card">
        <p className='title'> Fugiat sit voluptate elit excepteur dolor eiusmod adipisicing ipsum labore qui sit <br/> pariatur laborum.</p>
        <p className='price'>$10.00</p>
        <p className='starRating'>Stars</p>
        <div className='imageHolder'>
        <img src="https://m.media-amazon.com/images/I/71g2ednj0JL._AC_SY400_.jpg" alt=""/>
            <button>Add to card</button>
        </div>
        </div>

    )
}
   
export default Card;     
