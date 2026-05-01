import type { Config } from 'jest';

const config: Config = {
  setupFiles: ['./jest.setup.ts'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.spec\\.ts$',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/e2e-tests/',
    '.*\\.integration\\.spec\\.ts$',
    '.*\\.e2e-spec\\.ts$',
  ],
  transform: { '^.+\\.ts$': 'ts-jest' },
  testEnvironment: 'node',
};

export default config;
