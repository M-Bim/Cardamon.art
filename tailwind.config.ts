import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ["Inter var", "Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      gridColumn: {
        frame: "span 12 / span 12",
        "frame-sm": "2 / span 10",
        "frame-md": "3 / span 8",
        "frame-lg": "4 / span 6",
        "frame-xl": "5 / span 4",
      },
    },
  },
};
