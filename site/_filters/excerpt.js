module.exports = {
  excerpt: (content, limit = 156) => {
    if (content) {
      let txt = content
        .replace(/<[^>]+>/g, "")
        .replace(/\r\n|\n|\r|\t/g, " ")
        .trim()
        .slice(0, limit);
      // txt = txt.slice(0, (txt.indexOf(".") || txt.indexOf("。")) + 1);
      return txt;
    }
  },
};
