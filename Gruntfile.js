'use strict';

exports = module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: {
        files: {
          src: [
            'Gruntfile.js'
          ]
        }
      }
    },
    jsbeautifier: {
      options: {
        config: '.jsbeautifyrc'
      },
      build: {
        src: ['Gruntfile.js']
      },
      ci: {
        src: ['Gruntfile.js'],
        options: {
          mode: 'VERIFY_ONLY'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'jsbeautifier:build',
    'jsbeautifier:ci',
    'jshint'
  ]);
};
