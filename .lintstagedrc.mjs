export default {
    '*.{md,json}': ['prettier --cache --write --no-error-on-unmatched-pattern'],
    '*.{css,less,scss}': ['stylelint --fix', 'prettier --cache --write'],
    '*.{js,jsx,vue}': ['eslint --fix', 'prettier --cache --write'],
    '*.{ts,tsx}': ['eslint --fix', 'prettier --cache --parser=typescript --write']
}
