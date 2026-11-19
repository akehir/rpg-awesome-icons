const baseProjectConfig = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/../../setup-jest.ts'],
};

// Map the library to its sources so the example apps can be tested without
// the `@triangular/rpg-awesome-icons` package being built first.
const libModuleNameMapper = {
  '^@triangular/rpg-awesome-icons/icons$':
    '<rootDir>/../rpg-awesome-icons-lib/src/icons/index.mjs',
  '^@triangular/rpg-awesome-icons$':
    '<rootDir>/../rpg-awesome-icons-lib/src/public_api.ts',
};

module.exports = {
  collectCoverage: true,
  coverageReporters: ['html', 'text-summary'],
  projects: [
    {
      ...baseProjectConfig,
      displayName: 'rpg-awesome-icons-lib',
      rootDir: 'projects/rpg-awesome-icons-lib',
      coverageDirectory: '<rootDir>/../../coverage/rpg-awesome-icons-lib',
      collectCoverageFrom: [
        'src/**/*.ts',
        '!src/icons/**',
        '!src/**/*.spec.ts',
      ],
    },
    {
      ...baseProjectConfig,
      displayName: 'example-app',
      rootDir: 'projects/example-app',
      moduleNameMapper: libModuleNameMapper,
      coverageDirectory: '<rootDir>/../../coverage/example-app',
      collectCoverageFrom: [
        'src/**/*.ts',
        '!src/main.ts',
        '!src/environments/**',
        '!src/**/*.spec.ts',
      ],
    },
    {
      ...baseProjectConfig,
      displayName: 'example-app-standalone',
      rootDir: 'projects/example-app-standalone',
      moduleNameMapper: libModuleNameMapper,
      coverageDirectory: '<rootDir>/../../coverage/example-app-standalone',
      collectCoverageFrom: [
        'src/**/*.ts',
        '!src/main.ts',
        '!src/environments/**',
        '!src/**/*.spec.ts',
      ],
    },
  ],
};
