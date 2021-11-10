module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ["@semantic-release/npm", {
      "pkgRoot": "dist",
    }],
    ["@semantic-release/github", {
      "assets": [
        {"path": "dist/*.js", "label": "Package module"}
      ]
    }],
  ]
}