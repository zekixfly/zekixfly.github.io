module.exports = {
  related: function (collection = []) {
    const { tags: requiredTags, page } = this.ctx;
    return collection.filter((post) => {
      // Filter the specified collection, confirm it isn't the current page, and has all the required tags.
      // Updated to handle potentially missing `tags` properties, per https://github.com/11ty/eleventy/discussions/2534#discussioncomment-3419991 above.
      return (
        post.url !== page.url &&
        requiredTags?.every((tag) => post.data.tags?.includes(tag))
      );
    });
  },
};
