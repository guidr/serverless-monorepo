module.exports = {
  roots: [
    '<rootDir>/packages'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFiles: [
    'dotenv/config'
  ],
};
