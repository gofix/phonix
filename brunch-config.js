exports.config = {
  sourceMaps: false,
  optimize: true,
  files: {
    javascripts: {joinTo: 'js/phonix.js'},
    stylesheets: {joinTo: 'css/phonix.css'}
  },
  plugins: {
    sass: {
      debug: false,
      mode: 'native',
      options: {
        includePaths: ['node_modules/foundation-sites/scss']
      }
    }
  }
};
