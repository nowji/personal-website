// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  // VERY IMPORTANT: Ensure these paths are correct for YOUR project structure
  content: [
    './index.html', // <--- IMPORTANT for Vite, so Tailwind scans the body/html
    './src/**/*.{js,ts,jsx,tsx}', // Scans all JS/TS/JSX/TSX files in src/
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