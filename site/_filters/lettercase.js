function isString(value) {
  if (typeof value !== "string") return;
}

module.exports = {
  // Return all the tags used in a collection
  lowercase: (value) => {
    isString(value);
    return value.toLowerCase();
  },
  uppercase: (value) => {
    isString(value);
    return value.toUpperCase();
  },
  capitalize: (value) => {
    isString(value);
    return value.replace(/\b\w/g, (char) => {
      const word = char.toLowerCase();
      if (excludedWords.includes(word)) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    });
  },
};
