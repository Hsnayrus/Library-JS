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
