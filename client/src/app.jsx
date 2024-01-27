// require('dotenv')
import React, { useState, useEffect } from 'react';
import Search from './search.jsx';
import Header from './header.jsx';
import List from './list.jsx';
import Card from './card.jsx';
import helpers from './helpers.js';
// import Sample from '../../sample.js';

const App = () => {
  const [currentView, setCurrView] = useState([]);
  const [search, setSearch] = useState('');
  const changeHandler = (e) => {
    console.log(e.target.value);
  };
  const [newMovie, setNewMovie] = useState(movieModel);
  class Movie {
    constructor(Title, Year, Rated, Runtime, Genre, Director, Actors, Plot, Poster) {
      this.Title = Title;
      this.Year = Year;
      this.Rated = Rated;
      this.Runtime = Runtime;
      this.Genre = Genre;
      this.Director = Director;
      this.Actors = Actors;
      this.Plot = Plot;
      this.Poster = Poster;
    }
  };
  const [movieModel, setMovieModel] = useState({
    'Title': '',
    'Year': '',
    'Rated': '',
    'Runtime': '',
    'Genre': '',
    'Director': '',
    'Actors': '',
    'Plot': '',
    'Poster': ''
  });
  const [movieList, setMovieList] = useState([
    {
      'Title': 'Hackers',
      'Year': '1995',
      'Rated': 'PG-13',
      'Runtime': '105 min',
      'Genre': 'Crime Drama Romance',
      'Director': 'Iain Softley',
      'Actors': 'Jonny Lee Miller, Angelina Jolie, Jesse Bradford',
      'Plot': "Teenage hackers discover a criminal conspiracy with plans to use a computer virus that will capsize five oil tankers.",
      'Poster': 'https://m.media-amazon.com/images/M/MV5BNmExMTkyYjItZTg0YS00NWYzLTkwMjItZWJiOWQ2M2ZkYjE4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
    },
    {
      "Title": "Ghost in the Shell",
      "Year": "2017",
      "Rated": "PG-13",
      "Runtime": "107 min",
      "Genre": "Action, Crime, Drama",
      "Director": "Rupert Sanders",
      "Actors": "Scarlett Johansson, Pilou Asbæk, Takeshi Kitano",
      "Plot": "In the near future, Major Mira Killian is the first of her kind: A human saved from a terrible crash, who is cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzJiNTI3MjItMGJiMy00YzA1LTg2MTItZmE1ZmRhOWQ0NGY1XkEyXkFqcGdeQXVyOTk4MTM0NQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Blade Runner 2049",
      "Year": "2017",
      "Rated": "R",
      "Runtime": "164 min",
      "Genre": "Action, Drama, Mystery",
      "Director": "Denis Villeneuve",
      "Actors": "Harrison Ford, Ryan Gosling, Ana de Armas",
      "Plot": "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
    }
  ]);
  useEffect(() => {
    setCurrView(movieList);
  }, []);
  useEffect(() => {
  }, [movieList]);
  return <div>
    <Header />
    <Search setSearch={setSearch} search={search} getMovie={helpers.getMovie} model={Movie} list={movieList} setList={setMovieList} />
    <List view={movieList} />
  </div>
}

export default App