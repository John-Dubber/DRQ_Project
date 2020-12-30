import React from 'react';
import '../App.css';
import axios from 'axios';

class CreateVideogame extends React.Component {

  constructor() {
    super();
    // bindings
    this.OnChangeVideogameTitle = this.OnChangeVideogameTitle.bind(this);
    this.OnChangeVideogameYear = this.OnChangeVideogameYear.bind(this);
    this.OnChangeVideogamePoster = this.OnChangeVideogamePoster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      Title: '',
      Year: '',
      Poster: ''
    }
  }
  
  OnChangeVideogameTitle(event) {
    this.setState({
      Title: event.target.value
    })
  }

  OnChangeVideogameYear(event) {
    this.setState({
      Year: event.target.value
    })
  }

  OnChangeVideogamePoster(event){
    this.setState({
      Poster: event.target.value
    })
  }

  // when the submit is pressed this is run
  handleSubmit(event) {
    // popup
    alert("Videogame Added " + this.state.Title+ " "+this.state.Year+ " " +this.state.Poster)
    
    const newVideogame = {
      title: this.state.Title,
      year: this.state.Year,
      poster: this.state.Poster
    }
    //data is submitted to the url using the post
    axios.post('http://localhost:4000/api/videogames',newVideogame)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err)
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Please enter the information for the videogame to be added</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            {/* Label */}
            <label>Add videogame title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Title}
              onChange={this.OnChangeVideogameTitle}
            >
            </input>
          </div>
          <div>
            {/* Label */}
            <label>Add videogame Year: </label>
            <input
              type="text"
              // bootstrap css
              className="form-control"
              value={this.state.Year}
              onChange={this.OnChangeVideogameYear}
            >
            </input>
          </div>
          <div>
            {/* Label */}
            <label>Add videogame poster: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Poster}
              onChange={this.OnChangeVideogamePoster}
            >
            </input>
          </div>
          <div>
            {/* Submit */}
            <input
              type="submit">
            </input>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateVideogame;