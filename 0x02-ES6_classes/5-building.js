export default class Building {
  constructor(sqrt) {
    if (
      new.target !== Building
        && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqrt = sqrt;
  }

  get sqrt() {
    return this._sqrt;
  }

  set sqrt(value) {
    this._sqrt = value;
  }
}
