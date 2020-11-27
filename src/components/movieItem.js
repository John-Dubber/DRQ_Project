import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//axios import
import axios from 'axios';

class MovieItem extends React.Component {

    constructor(){
        super();
        //this is a requirement to use 'this'
        this.DeleteMovie = this.DeleteMovie.bind(this);
        
    }

    /*
    Delete Movie deletes a movie from the database.
    */
    DeleteMovie(e){
        e.preventDefault();
        //console.log("Delete Pressed "+ this.props.movie._id);
        
        axios.delete('http://localhost:4000/api/movies/'+this.props.movie._id)
        .then(()=>{
            //calls the ReloadData which refreshes the page after a document has been deleted
            this.props.ReloadData();
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {
        return (
            <div className="App">
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                        
                        <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MovieItem;