import React, {Component} from 'react';

class SearchBar extends Component{
  state = {
    query: ""
  }

  handleChange = (event) =>{
    this.setState({query: event.target.value})
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.onThisChange(this.state.query)
  }
  render(){
    return(
      <div>
        <form  className="form-inline" onSubmit={this.handleSubmit}>
          <input
            className="form-control form-control-sm ml-3 w-75"
            type="text"
            value={this.state.query}
            onChange={this.handleChange} />
            <i className="fas fa-search" aria-hidden="true"></i>
        </form>

      </div>


      )
  }
}

export default SearchBar
