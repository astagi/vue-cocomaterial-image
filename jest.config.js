module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/*.vue", "src/*.js",
    "!src/main.js", "!src/*.worker.js", "!**/node_modules/**"
  ],
}
