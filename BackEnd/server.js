const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')//enables cross origin resource sharing (which is disabled by default by your browser for security)
const bodyParser = require("body-parser")
const mongoose = require('mongoose');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    next();
})

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())
//creates a string with the url for the database.
const strConnection = 'mongodb+srv://admin:admin@cluster0.9gvln.mongodb.net/Movies?retryWrites=true&w=majority';
//connects to the mongodb database takes in the string strConnection assigned above
mongoose.connect(strConnection, { useNewUrlParser: true });

const Schema = mongoose.Schema;//declare schema for mongoDB

const moviesSchema = new Schema({
    Title: String,
    Year: String,
    Poster: String
})

const movieModel = mongoose.model('movie', moviesSchema);


//Displays the information from myMovies[] on the page /api/movies
app.get('/api/movies', (req, res) => {
    /* 
             "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
       
             "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
         
             "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
         
             "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
         } */

    movieModel.find((err, data) => {
        res.json(data);
    })
})

app.get('/api/movies/:id', (req, res) => {
    console.log(req.params.id);

    movieModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

//sever deletes the document with the id given in the parameters passed to it in the url
app.delete('/api/movies/:id', (req, res) => {
    console.log("Delete " + req.params.id);
    //searches the database for _id:(the id passed in by the url)
    //if there is an  error it sends there was an error else it sends the data
    movieModel.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (err)
            res.send(err);
        res.send(data);
    })
})


app.post('/api/movies', (req, res) => {
    console.log(req.body);
    /* console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster); */
    
    movieModel.create({
        Title: req.body.title,
        Year: req.body.year,
        Poster: req.body.poster
    })
    console.log('Data Received!');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})