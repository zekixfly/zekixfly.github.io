module.exports = {
  // Return all the tags used in a collection
  getAllTags: (collection) => {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    }
    return Array.from(tagSet);
  },
  getTagsCount: (collection, currentTag) => {
    let tagsArr = new Array();
    for (let item of collection) {
      (item.data.tags || []).forEach((tag) => tagsArr.push(tag));
    }
    return tagsArr.filter((tag) => tag === currentTag).length;
  },
  filterTagList: function (tags) {
    return (tags || []).filter(
      (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1
    );
  },
};
