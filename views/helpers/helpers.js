module.exports = {
  beginRow: (conditional, options) => {
    if (conditional % 2 === 0) {
      return options.fn(this);
    }
  },
  endRow: (conditional, options) => {
    if (conditional % 2 !== 0 || options.data.last === true) {
      return options.fn(this);
    }
  }
};
