module.exports = {
  layout: "index.njk",
  permalink: function ({ pagination }) {
    return pagination.pageNumber === 0
      ? "/"
      : `page${pagination.pageNumber + 1}/index.html`;
  },
};
