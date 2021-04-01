const { configureKnapsack } = require('@knapsack/app');
const { join } = require('path');
const { KnapsackAngularRenderer } = require('@knapsack/renderer-angular');
const {
  configure: configureChangelogMd,
} = require('@knapsack/plugin-changelog-md');
const { version } = require('./lerna.json');

module.exports = configureKnapsack({
  designTokens: {
    createCodeSnippet: (token) => `$${token.name}`,
  },
  dist: './dist',
  public: join(__dirname, 'ks-public/'),
  data: './data',
  version,
  templateRenderers: [new KnapsackAngularRenderer()],
  plugins: [
    configureChangelogMd({
      changelogPath: './CHANGELOG.md',
    }),
  ],
  cloud: {
    siteId: 'ap-sandbox',
    repoName: 'ap-sandbox',
    repoOwner: 'knapsack-cloud',
    baseBranch: 'main',
  },
});
