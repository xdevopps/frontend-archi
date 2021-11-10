module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ["@semantic-release/github", {
      "assets": [
        {"path": "dist/*.js", "label": "CSS distribution"},
        {"path": "dist/asset.min.js", "label": "JS distribution"}
      ]
    }],
  ]
}