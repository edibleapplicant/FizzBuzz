module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    files: [
      '*.js'
    ]
  });
};