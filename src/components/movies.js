import React from 'react';
import '../App.css';
import MovieItem from './movieItem';

class Movies extends React.Component {
  //added ReloadData to the render
  render() {
    return this.props.movies.map((movie)=>{
        return<MovieItem key={movie.imdbID} movie={movie} ReloadData={this.props.ReloadData}></MovieItem>
    }) 
}
}

export default Movies;