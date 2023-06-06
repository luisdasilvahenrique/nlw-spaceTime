module.exports = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
      '\\.(svg)$': 'jest-transform-stub',
    },
    moduleNameMapper: {
      '^../lib/auth$': '../lib/auth.ts',
    },
  };