import type { Config } from 'jest';

const config: Config = {
  setupFiles: ['./jest.setup.ts'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.e2e-spec\\.ts$',
  roots: ['<rootDir>/e2e-tests'],
  transform: { '^.+\\.ts$': 'ts-jest' },
  testEnvironment: 'node',
};

export default config;
