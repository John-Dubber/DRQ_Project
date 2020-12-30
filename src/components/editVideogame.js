import React from 'react';
import '../App.css';
import axios from 'axios';

class EditVideogame extends React.Component {

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
  
  /**componentDidMount is called immediately when the page is entered
   * It sends a request to the server to get the information about the
   * requested document to be edited
   * it then saves the information to be used
   */
  componentDidMount(){
      axios.get('http://localhost:4000/api/videogames/'+this.props.match.params.id)
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

  /**handleSubmit is triggered when the button is pressed
   * it saves the data into newVideogame which is then sent to
   * the server as a put request
   */
  handleSubmit(event) {
    // popup
    alert("Videogame Added " + this.state.Title+ " "+this.state.Year+ " " +this.state.Poster)
    
    const newVideogame = {
      Title: this.state.Title,
      Year: this.state.Year,
      Poster: this.state.Poster,
      _id: this.state._id
    }
    //data is submitted to the url using the put
    axios.put('http://localhost:4000/api/videogames/'+this.state._id, newVideogame)
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
        <h1>Please enter the updated information for the videogame</h1>
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
              type="submit"
              value='Edit Videogame'>
            </input>
          </div>
        </form>
      </div>
    );
  }
}
//marks the script for export
export default EditVideogame;