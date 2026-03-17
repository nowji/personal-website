import type { Config } from "@react-router/dev/config";

export default {
  // SSR is needed for prerendering at build time
  ssr: true,
  async prerender() {
    return ["/", "/experience", "/coursework", "/research"];
  },
} satisfies Config;
