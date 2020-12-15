module.exports = config => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./assets/');
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'content',
      output: '../dev',
      includes: "core/_includes",
      data: "core/_data"
    }
  };
};