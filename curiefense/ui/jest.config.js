module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        "ace-builds": "<rootDir>/node_modules/ace-builds"
    },
    testMatch: [
        '<rootDir>/**/*.spec.(js|jsx|ts|tsx)'
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transformIgnorePatterns: ['<rootDir>/node_modules/']
};
