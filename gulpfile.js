const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const path = require('path');

const paths = {
  scss: 'styles'
};

const css = () => {
  return src(`${paths.scss}/*.scss`)
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest(__dirname));
};

exports.css = css;

exports.default = cb => {
  css();
  cb();
};

exports.watch = cb => {
  watch([`styles/*.scss`, `styles/partials/*.scss`], function(cb) {
    css();
    cb();
  });
};
