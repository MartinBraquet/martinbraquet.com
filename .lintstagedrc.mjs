export default {
  "**/*.{ts,tsx,js,jsx}": (files) => [
    `prettier --write ${files.join(" ")}`,
    `eslint --config eslint.config.mjs --fix ${files.join(" ")}`,
    `eslint --config eslint.config.mjs --max-warnings 0 ${files.join(" ")}`,
  ],
  "**/*.{json,css,scss,md}": (files) => [`prettier --write ${files.join(" ")}`],
};
