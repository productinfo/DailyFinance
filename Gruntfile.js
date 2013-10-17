'use strict';

var path = require('path'),
  configLoader = require('konphyg')(path.resolve(__dirname, 'config')),
  config = configLoader('config');

exports = module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      compass: {
        files: [config.client + '/css/{,*/}*.{scss,sass}'],
        tasks: ['compass:server']
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp'
          ]
        }]
      },
      server: '.tmp'
    },
    express: {
      options: {
        port: config.port,
        hostname: '*'
      },
      livereload: {
        options: {
          server: path.resolve(config.server + '/lib'),
          bases: [path.resolve('./.tmp'), path.resolve(config.client)],
          livereload: true,
          serverreload: true
        }
      }
    },
    compass: {
      options: {
        sassDir: config.client + '/css',
        cssDir: '.tmp/css',
        javascriptsDir: config.client + '/js',
        importPath: config.client + '/bower_components',
        // httpFontsPath: '/fonts',
        // fontsDir: config.client + '/fonts',
        relativeAssets: false
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:' + config.port
      }
    },
    concurrent: {
      server: [
        'compass:server'
      ]
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'server/lib/*.*',
        'client/js/*.*',
        'Gruntfile.js',
        'index.js'
      ]
    },
    jsbeautifier: {
      options: {
        config: '.jsbeautifyrc'
      },
      build: {
        src: ['Gruntfile.js', 'client/**/*.{js,json,css,html}', '!client/bower_components/**/*.*', 'server/*.*']
      },
      ci: {
        src: ['Gruntfile.js', 'client/**/*.{js,json,css,html}', '!client/bower_components/**/*.*', 'server/*.*'],
        options: {
          mode: 'VERIFY_ONLY'
        }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('server', [
    'clean:server',
    'concurrent:server',
    'express:livereload',
    'open',
    'watch'
  ]);

  grunt.registerTask('default', [
    'jsbeautifier:build',
    'jsbeautifier:ci',
    'jshint'
  ]);
};
