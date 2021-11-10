module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    ["@semantic-release/github", {
      "assets": [
        {"path": ".", "label": "Package module"}
      ]
    }],
  ]
}