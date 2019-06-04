import React from 'react';
import {Link} from 'react-router-dom';

const RecipeList = props => (
  <div className="row mt-5">
  {props.recipes.map((recipe) => {
    return (
      <div className="col-sm-6 col-12 col-md-4" key={recipe.idMeal}>
        <div className="card mb-5">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="card-img-top"
            />
          <div className="card-body">
            <h3 className="card-title">{recipe.strMeal.length < 15 ? `${recipe.strMeal}` : `${recipe.strMeal.substring(0, 14)}...`}</h3>
            <button className="btn btn-link">
              <Link to={{
                pathname: `/recipe/${recipe.idMeal}`,
                state: {recipe: recipe.strMeal }
              }}>View Ingredients</Link>
            </button>

          </div>
        </div>
      </div>
    )
  })}
  </div>
);

export default RecipeList
