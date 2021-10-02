export default {
  object: [],

  getLength() {
    return this.object.length;
  },
  addLink(value) {
    if (value === "") {
      this.object.push("( )");
    } else {
      this.object.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (position > this.object.length || position <= 0 || isNaN(position)) {
      this.object = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.object = this.object
      .slice(0, position - 1)
      .concat(this.object.slice(position));
    return this;
  },
  reverseChain() {
    this.object.reverse();
    return this;
  },
  finishChain() {
    let result = this.object.join("~~");
    this.object = [];
    return result;
  },
};
