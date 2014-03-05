'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        curly: true, // require curly braces around single-line code blocks
        eqeqeq: true, // envforce === and !== use
        immed: true, // forbit immediate function w/o parens
        latedef: true, // warn about local vars used before declaration
        noarg: true, // warn about deprecated callee and caller use
        quotmark: true, // enforce consistent double/single quote use in a file
        undef: true, // warn about undefined variables
        unused: true, // warn about unused variables
        trailing: true, // don't allow trailing whitespace
        browser: true, // define browser globals (document, etc.)
        jquery: true, // define jQuery globals
        node: true // define node.js globals
      },
      all: [
        'Gruntfile.js',
        'modENCODE_files/js/site/**/*.js'
      ]
    },
    compass: {
      dist: {
        options: {
          sassDir: 'modENCODE_files/sass',
          cssDir: 'modENCODE_files/css',
          outputStyle: 'compressed'
        }
      }
    },
    watch: {
      compass: {
        files: [
          'modENCODE_files/sass/**/*.scss'
        ],
        tasks: ['compass']
      },
      js: {
        files: [
          'modENCODE_files/js/site/**/*.js'
        ],
        tasks: ['jshint']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: true
        },
        files: [
          'modENCODE_files/css/**/*.css',
          'modENCODE_files/js/**/*.js',
          'comparative_RNA_css.html'
        ]
      }
    },
    clean: {
      dist: [
        'assets/css/main.min.css',
        'assets/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Register tasks
  grunt.registerTask('default', [
    'watch'
  ]);

  grunt.registerTask('dev', [
    'watch'
  ]);

};
