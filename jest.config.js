module.exports = {
  setupFilesAfterEnv: ['<rootDir>jest.setup.js'],
  transformIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  }
}

