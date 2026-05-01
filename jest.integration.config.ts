import type { Config } from 'jest';

const config: Config = {
  setupFiles: ['./jest.setup.ts'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.integration\\.spec\\.ts$',
  testPathIgnorePatterns: ['/node_modules/', '/e2e-tests/'],
  transform: { '^.+\\.ts$': 'ts-jest' },
  testEnvironment: 'node',
};

export default config;
