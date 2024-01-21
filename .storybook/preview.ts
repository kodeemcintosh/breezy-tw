import type { Preview } from "@storybook/react";
// import '../src/tailwind.css';

const preview: Preview = {
  parameters: {
    // layout: "fullscreen",
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
