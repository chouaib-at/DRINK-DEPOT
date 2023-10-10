import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Wrapper from '../CSS/CocktailPage'; // Update the path accordingly

const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const Cocktail = () => {
  const { id } = useParams();
  const [cocktailData, setCocktailData] = useState(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await axios.get(`${singleCocktailUrl}${id}`);
        setCocktailData(response.data.drinks[0]);
      } catch (error) {
        console.error('Error fetching cocktail:', error);
      }
    };

    fetchCocktail();
  }, [id]);

  if (!cocktailData) {
    return <h2>Loading...</h2>;
  }

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = cocktailData;

  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>
          Back Home
        </Link>
      </header>
      <div className='drink'>
        <img src={image} alt={name} className='img' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>Name:</span> {name}
          </p>
          <p>
            <span className='drink-data'>Category:</span> {category}
          </p>
          <p>
            <span className='drink-data'>Info:</span> {info}
          </p>
          <p>
            <span className='drink-data'>Glass:</span> {glass}
          </p>
          
          <p>
            <span className='drink-data'>Instructions:</span> {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;









