import React from 'react';
import '../App.css';
import VideogameItem from './videogameItem';

class Videogames extends React.Component {
  //added ReloadData to the render
  render() {
    return this.props.videogames.map((videogame)=>{
        return<VideogameItem key={videogame.imdbID} videogame={videogame} ReloadData={this.props.ReloadData}></VideogameItem>
    }) 
}
}

export default Videogames;