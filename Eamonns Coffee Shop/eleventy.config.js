module.exports = function(eleventyConfig) {
  //Copy static assets directly to the output folder
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  //nunjucks filters
  eleventyConfig.addNunjucksFilter("date", function(input, format = "MMM d, yyyy") {
    if (!input) return "";
    const dateObj = input === 'now' ? new Date() : (input instanceof Date ? input : new Date(input));
    if (isNaN(dateObj.getTime())) return "";
    // Simple formatter maps
    const map = {
      "MMM d, yyyy": { month: "short", day: "numeric", year: "numeric" },
      "MMMM d, yyyy": { month: "long", day: "numeric", year: "numeric" },
      "yyyy": { year: "numeric" }
    };
    const opts = map[format] || { year: "numeric", month: "short", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", opts).format(dateObj);
  });

  //add slice filter for limiting arrays
  eleventyConfig.addNunjucksFilter("slice", function(array, start, end) {
    if (!Array.isArray(array)) return [];
    return array.slice(start, end);
  });

  //Collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/posts/**/*.md")
      .filter(item => !item.data.draft)
      .sort((a, b) => (a.date > b.date ? -1 : 1));
  });

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
    dir: {
      input: "src",
      includes: "includes",
      data: "_data",
      output: "_site"
    }
  };
};