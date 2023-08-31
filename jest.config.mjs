import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' })

/** @type {import('jest).Config} */

const config = {
    "bail": 1,
    "verbose": true,
    snapshotFormat: {
        printBasicPrototype: false,
      },
    setupFilesAfterEnv: ['<rootDir>/jest-etup.js'],
    testEnvironment: 'jest-environment-jsdom',
}

export default createJestConfig(config);