import React from 'react';
import '../App.css';
import Videogames from './videogames';
import axios from 'axios';

class ReadVideogames extends React.Component {
  constructor(){
    super();
    this.ReloadData = this.ReloadData.bind(this);
  }

  state = {
    videogames: []

  };
  //ReloadData is essentually 
  ReloadData(){
    //asynchronous call to retrieve infromation from the website
    axios.get('http://localhost:4000/api/videogames')
      // if the call is ok it will enter this
      .then(response => {
        this.setState(
          {
            //this will assign all the data retrieved to videogames
            videogames: response.data
          }
        )
      })
      // if there is a problem it will be caught and an error output to the console
      .catch((error) => {
        console.log(error);
      });
  }

  //lifecycle hook, will fire every time the component becomes active
  componentDidMount() {
    //asynchronous call to retrieve infromation from the website
    axios.get('http://localhost:4000/api/videogames')
      // if the call is ok it will enter this
      .then(response => {
        this.setState(
          {
            //this will assign all the data retrieved to videogames
            videogames: response.data
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
        <h1>This is the read Videogames component</h1>
        <Videogames videogames={this.state.videogames} ReloadData={this.ReloadData}></Videogames>
      </div>
    );
  }
}

export default ReadVideogames;