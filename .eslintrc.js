module.exports = {
  extends: 'airbnb',
  rules: {
    'no-console': 'off',
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
    'prefer-const': 'off',
    'no-restricted-syntax': ['off', 'FunctionExpression', 'WithStatement', "BinaryExpression[operator='in']"],
  },
  env: {
    browser: true,
    jest: true,
  },
};
