module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // init config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Sass
    sass: {
      all: {
        files: {
          'sample.css': 'sample.scss'
        }
      }
    },

    // Watch
    watch: {
      all: {
        files: ['sample.scss','./scss/*.scss'],
        tasks: ['sass']
      }
    }
  });

  // resiter tasks
  grunt.registerTask('default', ['sass', 'watch']);

};
