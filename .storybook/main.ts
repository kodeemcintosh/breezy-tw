import { mergeConfig } from 'vite';

export default {
  stories: [
    "../lib/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  // stories: ["../src/**/*.mdx", "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: '@storybook/react-vite',
  },
  async viteFinal(config: any) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  features: {
    storyStoreV7: true // Switch to false to disable hot reload
  }
};