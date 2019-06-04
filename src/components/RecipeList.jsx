import React from 'react';

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
          </div>
        </div>
      </div>
    )
  })}
  </div>
);

export default RecipeList
