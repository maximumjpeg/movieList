const axios = require('axios').default;
const config = require('../../config.js')


module.exports = {
  test: () => {
    console.log(config.url, config.key);
  },
  getMovie: (title, model, old, setter) => {
    axios.get(`${config.url}/?apikey=${config.key}&t=${title}&plot="full"&type="movie"`)
      .then((res) => {
        // console.log(response.data);
        const temp = new model(res.data.Title, res.data.Year, res.data.Rated, res.data.Runtime, res.data.Genre, res.data.Director, res.data.Actors, res.data.Plot, res.data.Poster);
        var oldList = old;
        oldList = [...old, temp];
        console.log(oldList);
        setter(oldList);
      })
      .catch((error) => {
        console.log(error);
      })
  }
}