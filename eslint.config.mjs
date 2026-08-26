import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    // The CMS Studio is a separate project with its own dependencies and
    // tsconfig; it must not be linted with the site's Next.js rules.
    ignores: ["studio/**", "out/**"],
  }
  /*...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  }),*/
]

export default eslintConfig;
