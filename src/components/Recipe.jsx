import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Recipe extends Component {
  state = {
    activeRecipe: []
  }

  componentDidMount = async() =>{
    const idCall = this.props.match.params.id
    const request = await axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idCall}`)
    this.setState({activeRecipe: request.data.meals[0]})
  }

  render(){
    console.log(this.state.activeRecipe)
    const thisRecipe = this.state.activeRecipe
    return(
      <div className="container">
        <h3>{thisRecipe.strMeal}</h3>
        <img src={thisRecipe.strMealThumb}/>
        <p><strong>Meal Style:</strong>{thisRecipe.strArea}</p>
        <p><strong>Meal Tags:</strong>{thisRecipe.strTags}</p>
        <p><strong>Meal Categories:</strong>{thisRecipe.strCategory}</p>
        <ul>
          <li>{thisRecipe.strIngredient1}: {thisRecipe.strMeasure1}</li>
          <li>{thisRecipe.strIngredient2}: {thisRecipe.strMeasure2}</li>
          <li>{thisRecipe.strIngredient3}: {thisRecipe.strMeasure3}</li>
          <li>{thisRecipe.strIngredient4}: {thisRecipe.strMeasure4}</li>
          <li>{thisRecipe.strIngredient5}: {thisRecipe.strMeasure5}</li>
          <li>{thisRecipe.strIngredient6}: {thisRecipe.strMeasure6}</li>
          <li>{thisRecipe.strIngredient7}: {thisRecipe.strMeasure7}</li>
          <li>{thisRecipe.strIngredient8}: {thisRecipe.strMeasure8}</li>
          <li>{thisRecipe.strIngredient9}: {thisRecipe.strMeasure9}</li>
          <li>{thisRecipe.strIngredient10}: {thisRecipe.strMeasure10}</li>
        </ul>
        <p>{thisRecipe.strInstructions}</p>
          <button className="btn btn-link">
            <Link to="/">Back to the list</Link>
          </button>
      </div>

      )
  }
}

export default Recipe
