const markdownIt = require("markdown-it")
const markdownItAnchor = require("markdown-it-anchor")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = function (eleventyConfig) {
  // Syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight)

  // Static assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" })

  // Markdown rendering
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.linkInsideHeader({
      symbol: "#",
      placement: "after"
    })
  })

  eleventyConfig.setLibrary("md", md)

  // Small handlebars helper for nav active state
  eleventyConfig.addHandlebarsHelper("eq", (a, b) => a === b)

  // YouTube embed helper (supports start time)
  eleventyConfig.addShortcode("youtube", (id, title, startSeconds) => {
    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1"
    })

    if (startSeconds !== undefined && startSeconds !== null && String(startSeconds).length) {
      params.set("start", String(startSeconds))
    }

    const src = `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`
    const safeTitle = (title || "YouTube video").replace(/"/g, "&quot;")

    return `
<div class="video">
  <iframe
    src="${src}"
    title="${safeTitle}"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>
</div>
`
  })

  // Simple code block for the install command
  eleventyConfig.addShortcode("installCommand", (cmd) => {
    const safe = String(cmd || "npx get-shit-done-cc")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")

    return `<pre class="codeblock"><code class="language-bash">${safe}</code></pre>`
  })

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist"
    },
    templateFormats: ["md", "hbs", "html"],
    markdownTemplateEngine: "hbs",
    htmlTemplateEngine: "hbs",
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/"
  }
}
