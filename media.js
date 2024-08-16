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

let myBook = new Media();
