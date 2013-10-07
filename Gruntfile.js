'use strict';

exports = module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'client/app/js'
      ]
    },
    jsbeautifier: {
      options: {
        config: '.jsbeautifyrc'
      },
      build: {
        src: ['Gruntfile.js', 'client/app/**/*.{js,json,css,html}', '!client/app/bower_components/**/*.*']
      },
      ci: {
        src: ['Gruntfile.js', 'client/app/**/*.{js,json,css,html}', '!client/app/bower_components/**/*.*'],
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
