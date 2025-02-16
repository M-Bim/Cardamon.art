import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default {
  theme: {
    fontFamily: {
      sans: ["Inter var", "Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      gridColumn: {
        frame: "span 12 / span 12",
        "frame-sm": "3 / span 6",
        "frame-md": "4 / span 6",
        "frame-lg": "5 / span 4",
        "frame-xl": "6 / span 2",
      },
    },
  },
} as Partial<Config>;
