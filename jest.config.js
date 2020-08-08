module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: ["src/components/*.vue", "!**/node_modules/**"]
}
