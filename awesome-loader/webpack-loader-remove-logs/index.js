module.exports = function (source) {
  const transformedSource = source.replace(/console\.log(.*)/g, "");

  return transformedSource;
};
