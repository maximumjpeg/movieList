// require('dotenv')
import React, { useState, useEffect } from 'react';
import Search from './search.jsx';
import Header from './header.jsx';
import List from './list.jsx';
import Card from './card.jsx';
import helpers from './helpers.js';
// import Sample from '../../sample.js';

const App = () => {
  const [focused, setFocused] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});
  const [currentView, setCurrView] = useState([]);
  const [search, setSearch] = useState('');
  const [expandSearch, setExpandSearch] = useState(false);
  const focusHandler = () => {

  };
  const changeHandler = (e) => {
    console.log(e.target.value);
  };
  // const [newMovie, setNewMovie] = useState(movieModel);
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
  // const [movieList, setMovieList] = useState([]);
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
    },
    {
      "Title": "Akira",
      "Year": "1988",
      "Rated": "R",
      "Runtime": "124 min",
      "Genre": "Animation, Action, Drama",
      "Director": "Katsuhiro Ôtomo",
      "Actors": "Mitsuo Iwata, Nozomu Sasaki, Mami Koyama",
      "Plot": "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath who can only be stopped by a teenager, his gang of biker friends and a group of psychics.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjFmNWYzZjMtYWIyZi00NDVmLWIxY2EtN2RiMjZiMDk4MzcyXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_SX300.jpg",
    },
    {
      "Title": "Johnny Mnemonic",
      "Year": "1995",
      "Rated": "R",
      "Runtime": "96 min",
      "Genre": "Action, Drama, Sci-Fi",
      "Director": "Robert Longo",
      "Actors": "Keanu Reeves, Dolph Lundgren, Dina Meyer",
      "Plot": "A data courier, literally carrying a data package inside his head, must deliver it before he dies from the burden or is killed by the Yakuza.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTdhYjEzYTEtYTkwZC00NzgxLWI0ZWEtYmEyMGZhOWYwMjE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      "Title": "The Matrix",
      "Year": "1999",
      "Rated": "R",
      "Runtime": "136 min",
      "Genre": "Action, Sci-Fi",
      "Director": "Lana Wachowski, Lilly Wachowski",
      "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
      "Plot": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      "Title": "Blade Runner",
      "Year": "1982",
      "Rated": "R",
      "Runtime": "117 min",
      "Genre": "Action, Drama, Sci-Fi",
      "Director": "Ridley Scott",
      "Actors": "Harrison Ford, Rutger Hauer, Sean Young",
      "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      "Title": "The Fifth Element",
      "Year": "1997",
      "Rated": "PG-13",
      "Runtime": "126 min",
      "Genre": "Action, Adventure, Sci-Fi",
      "Director": "Luc Besson",
      "Actors": "Bruce Willis, Milla Jovovich, Gary Oldman",
      "Plot": "In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr. Zorg at bay.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZWFjYmZmZGQtYzg4YS00ZGE5LTgwYzAtZmQwZjQ2NDliMGVmXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
    },

  ]);
  useEffect(() => {
    setCurrView(movieList);
  }, []);
  useEffect(() => {
  }, [movieList]);
  return <div className="app-wrapper">
    <Header />
    <Search setSearch={setSearch} search={search} getMovie={helpers.getMovie} model={Movie} list={movieList} setList={setMovieList} setExpandSearch={setExpandSearch} expandSearch={expandSearch} />
    <List view={movieList} focused={focused} setFocused={setFocused} currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} />
  </div>
}

export default App