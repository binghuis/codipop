/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  cache: true,
  overrides: [
    {
      files: ["**/*/*.scss"],
      extends: ["stylelint-config-recommended-scss"],
    },
    {
      files: ["**/*/*.vue"],
      extends: ["stylelint-config-recommended-vue"],
      rules: {},
    },
  ],
};
