import React, {Component} from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

class App extends Component{
  state = {
    recipes: []
  }
  handleThisChange = async query => {
    const response = await axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`)
    this.setState({recipes: response.data.meals})
  }

  render(){
    return(
      <div className="container">
        <h1>Hello Recipe</h1>
        <SearchBar onThisChange={this.handleThisChange} />
        <RecipeList recipes={this.state.recipes}/>
      </div>
      )
  }
}

export default App
