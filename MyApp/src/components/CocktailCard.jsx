import { Link } from 'react-router-dom';
import Wrapper from '../CSS/CocktailCard';
const CocktailCard = ({ image, name, id, info, glass }) => {
    return (
      <Wrapper>
        <div className='card-container'>
        <div className='img-container' >
          <img src={image} alt={name}  />
        </div>
        <div className='discription'>
          <h4>{name}</h4>
          <h5>{glass}</h5>
          <p>{info}</p>
          <Link to={`/cocktail/${id}`} className='btn'>
            details
          </Link>
        </div>
        </div>
      </Wrapper>
    );
  };
  export default CocktailCard;