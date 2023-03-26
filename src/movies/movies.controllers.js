const moviesDB = [
  {
    id: 1,
    "title": "Taxi Driver",
    "description": "Travis, an ex-marine and Vietnam veteran, works as a taxi driver in New York City. One day, he decides to save an underage prostitute from her pimp in an effort to clean the city of its corruption.",
    "year": 1976,
    "director": "Martin Scorsese"
  },
  {
    id: 2,
    "title": "Fight Club",
    "description": "Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.",
    "year": 1999,
    "director": "David Fincher"
  },
  {
    id: 3,
    "title": "American Psycho",
    "description": "Patrick Bateman, a wealthy investment banker, hides his psychopathic ego from his friends. Later, his illogical fantasies escalate and he submits to an uncontrollable bloodlust.",
    "year": 2000,
    "director": "Mary Harron"
  }
]

let movieId = 4

const findAllMovies = async () => {
  return moviesDB
}

const findMovieById = async (id) => {
  const movie = moviesDB.find(movieItem => movieItem.id === id)
  return movie
}

const createMovie = async (movieObj) => {
  const newMovie = {
    id: movieId++,
    "title": movieObj.title || 'Untitled',
    "description": movieObj.description || null,
    "year": movieObj.year || 1800,
    "director": movieObj.director || 'Anonymous'
  }
  moviesDB.push(newMovie)
  return newMovie
}

module.exports = {
  findAllMovies,
  findMovieById,
  createMovie
}