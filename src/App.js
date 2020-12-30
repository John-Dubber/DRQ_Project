import React from 'react';
import './App.css';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import CreateMovie from './components/createMovie';
import ReadMovies from './components/readMovies';
import EditMovie from './components/editMovie';
import ReadVideogames from './components/readVideogames';
import CreateVideogame from './components/createVideogame';
import { NavDropdown } from 'react-bootstrap';
import EditVideogame from './components/editVideogame';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/readMovies">Movies</Nav.Link>
              <Nav.Link href="/readVideogames">Videogames</Nav.Link>
              <NavDropdown title="Add something" id="nav-dropdown">
                <NavDropdown.Item href="/createMovie">Add Movie</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/createVideogame">Add Videogame</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/createMovie" component={CreateMovie} />
            <Route path="/createVideogame" component={CreateVideogame} />
            <Route path="/readMovies" component={ReadMovies} />
            <Route path="/readVideogames" component={ReadVideogames} />
            <Route path="/editMovie/:id" component={EditMovie}/>
            <Route path="/editVideogame/:id" component={EditVideogame}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
