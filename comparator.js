const Compare = require("./compare");

class Comparator {
  constructor(compareFn = Comparator.defaultCompareFn) {
    this.compareFn = compareFn;
  }

  static defaultCompareFn(a, b) {
    if (a === b) {
      return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
  }

  equal(a, b) {
    return this.compareFn(a, b) === Compare.EQUALS;
  }

  lessThan(a, b) {
    return this.compareFn(a, b) < Compare.EQUALS;
  }

  greaterThan(a, b) {
    return this.compareFn(a, b) > Compare.EQUALS;
  }

  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }
}

module.exports = Comparator;

