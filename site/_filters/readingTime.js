module.exports = {
  readingTime: (wordcount) => {
    let readingTime = Math.ceil(wordcount / 220);
    if (readingTime === 1) {
      return readingTime + " minute";
    }
    return readingTime + " minutes";
  },
};
