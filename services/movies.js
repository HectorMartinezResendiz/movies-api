const { moviesMock } = require('../utils/mocks/movies');

class MoviesService {
  async getMovies() {
    const movies = await Promise.resolve(moviesMock);
    return movies || [];
  }

  async getMovie() {
    const movie = await Promise.resolve(moviesMock[0]);
    return movie || {};
  }

  async createMovie() {
    const createdMovieId = await Promise.resolve(moviesMock[0].id);
    return this.createdMovieId;
  }

  async updateMovie() {
    const updatedMovieId = await Promise.resolve(moviesMock[0].id);
    return this.updatedMovieId;
  }

  async deleteMovie() {
    const deletedMovieId = await Promise.resolve(moviesMock[0].id);
    return this.deletedMovieId;
  }
}

module.exports = MoviesService;