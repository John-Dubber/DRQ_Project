import React from 'react';
import '../App.css';
import axios from 'axios';

class EditMovie extends React.Component {

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
  
  /**componentDidMount is called immediately when the page is entered
   * It sends a request to the server to get the information about the
   * requested document to be edited
   * it then saves the information to be used
   */
  componentDidMount(){
      axios.get('http://localhost:4000/api/movies/'+this.props.match.params.id)
      .then((response)=>{
          this.setState({
              Title:response.data.Title,
              Year:response.data.Year,
              Poster:response.data.Poster,
              _id:response.data._id
          })
      })
      .catch((err)=>{
          console.log(err)
      });
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

  /**handleSubmit is triggered when the button is pressed
   * it saves the data into newMovie which is then sent to
   * the server as a put request
   */
  handleSubmit(event) {
    // popup
    alert("Movie Added " + this.state.Title+ " "+this.state.Year+ " " +this.state.Poster)
    
    const newMovie = {
      Title: this.state.Title,
      Year: this.state.Year,
      Poster: this.state.Poster,
      _id: this.state._id
    }
    //data is submitted to the url using the put
    axios.put('http://localhost:4000/api/movies/'+this.state._id, newMovie)
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Please enter the updated information for the movie</h1>
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
              type="submit"
              value='Edit Movie'>
            </input>
          </div>
        </form>
      </div>
    );
  }
}
//marks the script for export
export default EditMovie;