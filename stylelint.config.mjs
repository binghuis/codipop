/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard', 'stylelint-config-tailwindcss'],
    cache: true,
    overrides: [
        {
            files: ['**/*/*.scss'],
            extends: ['stylelint-config-recommended-scss']
        },
        {
            files: ['**/*/*.vue'],
            extends: ['stylelint-config-recommended-vue'],
            rules: {}
        }
    ]
}
