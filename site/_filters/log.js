function safeStringify(obj, space = 2) {
  const seen = new WeakSet();
  return JSON.stringify(
    obj,
    (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return; // 排除循環引用的部分
        }
        seen.add(value);
      }
      return value;
    },
    space
  );
}

module.exports = {
  log: (data) => {
    console.log(data);
  },
};
