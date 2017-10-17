const TvShow = require('./tvShow');
const createId = require('../utils/idUtil');

class TvShowService {
  constructor() {
    this.tvShows = [new TvShow(createId(), 'Mr.Robot', 'Drama'),
     new TvShow(createId(), 'Black Mirror', 'Drama')];
  }

  getAll() {
    return this.tvShows;
  }

  getById(id) {
    return this.tvShows.find(item => item.id == id);
  }

  createTvShow(name, genre) {
    const id = createId();
    const tvShow = new TvShow(id, name, genre);
    this.tvShows.push(tvShow);
    return tvShow;
  }
}
module.exports = new TvShowService();
