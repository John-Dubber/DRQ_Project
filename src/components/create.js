import React from 'react';
import '../App.css';
import axios from 'axios';

class Create extends React.Component {

  constructor() {
    super();
    // bindings
    this.OnChangeMovieTitle = this.OnChangeMovieTitle.bind(this);
    this.OnChangeMovieYear = this.OnChangeMovieYear.bind(this);
    this.OnChangeMoviePoster = this.OnChangeMoviePoster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      Title: '',
      Year: '',
      Poster: ''
    }
  }
  
  OnChangeMovieTitle(event) {
    this.setState({
      Title: event.target.value
    })
  }

  OnChangeMovieYear(event) {
    this.setState({
      Year: event.target.value
    })
  }

  OnChangeMoviePoster(event){
    this.setState({
      Poster: event.target.value
    })
  }

  // when the submit is pressed this is run
  handleSubmit(event) {
    // popup
    alert("Movie Added " + this.state.Title+ " "+this.state.Year+ " " +this.state.Poster)
    
    const newMovie = {
      title: this.state.Title,
      year: this.state.Year,
      poster: this.state.Poster
    }
    //data is submitted to the url using the post
    axios.post('http://localhost:4000/api/movies',newMovie)
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
        <h1>This is the create component</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            {/* Label */}
            <label>Add movie title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Title}
              onChange={this.OnChangeMovieTitle}
            >
            </input>
          </div>
          <div>
            {/* Label */}
            <label>Add movie Year: </label>
            <input
              type="text"
              // bootstrap css
              className="form-control"
              value={this.state.Year}
              onChange={this.OnChangeMovieYear}
            >
            </input>
          </div>
          <div>
            {/* Label */}
            <label>Add movie poster: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Poster}
              onChange={this.OnChangeMoviePoster}
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

export default Create;