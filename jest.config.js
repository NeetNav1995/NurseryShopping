// export default {
//   testEnvironment: 'jsdom',
//   moduleFileExtensions: ['js', 'jsx'],
//   transform: {
//     '^.+\\.(js|jsx)$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-react'] }],
//   },
//   setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
// };

// export default {
//   testEnvironment: 'jest-environment-jsdom',
//   moduleFileExtensions: ['js', 'jsx'],
//   transform: {
//     '^.+\\.(js|jsx)$': ['babel-jest', {
//       presets: ['@babel/preset-env', '@babel/preset-react'],
//     }],
//   },
//   setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
// };

export default {
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest'],
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};

