const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  'transform': {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  'testPathIgnorePatterns': [
    '<rootDir>/test/e2e',
    '<rootDir>/node_modules/'
  ],
  'moduleNameMapper': {
    '^@/components/([^\\.]*)$': '<rootDir>/src/components/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^Elements/(.*)$': '<rootDir>/src/components/Webview3/Elements/$1',
    '^src/components/([^\\.]*)$': '<rootDir>/src/components/$1.vue',
    '^vue$': 'vue/dist/vue.common.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  'moduleFileExtensions': [
    'js',
    'json',
    'vue'
  ],
  setupFiles: ['<rootDir>/test/unit/setup'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ]
}
