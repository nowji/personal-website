// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  // VERY IMPORTANT: Ensure these paths are correct for YOUR project structure
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white-bg': '#ded9d9',
        'dark-gray-primary': '#363434',
      },
    },
  },
  plugins: [],
};

export default config;