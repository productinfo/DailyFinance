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
          server: path.resolve(config.server),
          bases: [path.resolve(config.target), path.resolve(config.client)],
          livereload: true,
          serverreload: true
        }
      },
      dist: {
        options: {
          server: path.resolve(__dirname, config.server),
          bases: [path.resolve(config.target), path.resolve(config.client)]
        }
      },
      test: {
        options: {
          server: path.resolve(__dirname, config.server),
          bases: [path.resolve(__dirname, config.target), path.resolve(__dirname, 'test')]
        }
      }
    },
    compass: {
      options: {
        sassDir: config.client + '/css',
        cssDir: '.tmp/css',
        javascriptsDir: config.client + '/js',
        importPath: config.client + '/bower_components',
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
      ],
      test: [
        'compass'
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

  grunt.registerTask('test', [
    'concurrent:test',
    'express:test',
    'karma:unit'
  ]);

  // for development usage
  grunt.registerTask('server', [
    'clean:server',
    'concurrent:server',
    'express:livereload',
    'open',
    'watch'
  ]);

  // for deploying on production instance
  grunt.registerTask('deploy', [
    'clean:server',
    'concurrent:server',
    'express:dist',
    'express-keepalive'
  ]);

  grunt.registerTask('default', [
    'jsbeautifier:build',
    'jsbeautifier:ci',
    'jshint'
  ]);
};
