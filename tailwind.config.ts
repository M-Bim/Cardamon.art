import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Inter var", "Inter", ...defaultTheme.fontFamily.sans],
    },
  },
};
