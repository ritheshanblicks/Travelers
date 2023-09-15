const isProduction = process.env.REACT_APP_ENV === 'production';
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano')({
  preset: [
    'default',
    {
      discardComments: {
        removeAll: true,
      },
    },
  ],
});

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    tailwindcss('./tailwind.config.js'),
    require('postcss-preset-env')({
      stage: 1,
    }),
    // require('postcss-nested'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('autoprefixer'),
    // ...(isProduction ? [cssnano, purgecss] : []),
    ...(isProduction ? [cssnano] : []),
  ],
};
