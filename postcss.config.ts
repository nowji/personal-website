// postcss.config.ts
// You might need to install 'ts-node' or 'jiti' if your build system
// doesn't natively support TypeScript config files.
// For Vite, it often works out of the box with tsconfig.json.

import type { Config } from 'postcss-load-config';

const config: Config = {
  plugins: {
    tailwindcss: {}, // This is the crucial part for Tailwind
    autoprefixer: {}, // Recommended for browser compatibility
    // Add other PostCSS plugins here if you use them (e.g., postcss-nesting)
  },
};

export default config;