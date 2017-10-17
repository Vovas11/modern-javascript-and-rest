const TvShow = require('./tvShow');
class TvShowService {
  constructor() {
    this.tvShows = [new TvShow(1, 'Mr.Robot', 'Drama'),
     new TvShow(2, 'Black Mirror', 'Drama')];
  }

  getAll() {
    return this.tvShows;
  }

  getById(id) {
    return this.tvShows.find(item => item.id == id);
  }
}
module.exports = new TvShowService();
