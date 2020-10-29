import React from 'react';
import '../App.css';
import Movies from './movies';
import axios from 'axios';

class Read extends React.Component {

  state = {
    movies: []

  };

  //lifecycle hook, will fire every time the component becomes active
  componentDidMount() {
    //asynchronous call to retrieve infromation from the website
    axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
      // if the call is ok it will enter this
      .then(response => {
        this.setState(
          {
            //this will assign all the data retrieved to movies
            movies: response.data.Search
          }
        )
      })
      // if there is a problem it will be caught and an error output to the console
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>This is the read component</h1>
        <Movies movies={this.state.movies}></Movies>
      </div>
    );
  }
}

export default Read;