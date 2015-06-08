/**
 * This is just a template file to be tracked in GIT. For you own development
 * environment, save this as Gruntfile.js and make any changes necessary, for
 * example, update the 'proxyUrl' that browserSync should use to use as its base.
 */

module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    localDev: grunt.file.readJSON('localSettings.json'),

    watch: {
      files: 'src/sass/**/*.scss',
      tasks: ['sass']
    },

    sass: {
      dist: {
        files: {
          'build/style.css' : 'src/sass/style.scss'
        }
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: ['style.css', '**/*.php', '**/*.js']
        },
        options: {
          watchTask: true,
          proxy: '<%= localDev.proxyUrl %>'
        }
      }
    }

  });
  // Load npm tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register Tasks
  grunt.registerTask('server',['browserSync', 'watch']);

  // Define default task
  grunt.registerTask('default', 'Lists the available grunt tasks.', function(){
    grunt.log.subhead('Command Me! Oink Oink!');
    grunt.log.writeln('Try these tasks:');

    grunt.log.subhead('grunt server');
    grunt.log.writeln('Launches browserSync, and executes the "grunt watch" command which monitors the Sass folder for changes and compiles into CSS.');
  });

};
