class Media {
  /**
   *
   * @param {string} title
   */
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  /**
   *
   * @param {number} newRating
   */
  addRating(newRating) {
    this._ratings.push(newRating);
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  /**
   *
   * @returns {number} Average of ratings
   */
  getAverageRatings() {
    let ratingsSum = this._ratings.reduce((accumulator, currentVal) => {
      return accumulator + currentVal;
    }, 0);
  }
}

class Book extends Media {
  /**
   *
   * @param {string} author
   * @param {string} title
   * @param {number} pages
   */
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  /**
   *
   * @param {string} director
   * @param {string} title
   * @param {number} runTime
   */
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  /**
   *
   * @param {string} artist
   * @param {string} title
   * @param {[string]} songs
   */
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}

module.exports.Media = Media;
module.exports.Book = Book;
module.exports.CD = CD;
module.exports.Movie = Movie;
