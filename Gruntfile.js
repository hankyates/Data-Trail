/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      version: '0.1.0',
      banner: '/*! Datarail - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://hankyates.com/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Hank Yates; Licensed MIT */'
    },
    jshint: {
      options: {
        shadow: false
      },
      all: [
        'src/*.js',
        'src/**/*.js',
        'test/**/*.js'
      ]
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: '.',
          paths: {
            easel: 'lib/easeljs-0.6.0.min',
            tween: 'lib/tweenjs-0.3.0.min',
            sound: 'lib/soundjs-0.3.0.min',
            preload: 'lib/preloadjs-0.2.0.min',
            underscore: 'lib/underscore-1.4.4.amd',
            backbone: 'lib/backbone-0.9.10.amd'
          },
          name: 'src/game',
          out: 'public/js/datatrail.js'
        }
      }
    },
    watch: {
      files: [ 
        'test/*.js',
        'src/*.js',
        'src/**/*.js'
      ],
      tasks: ['jshint','requirejs', 'jasmine']
    },
    jasmine: {
      all:{
        src: 'public/js/datatrail.js',
        options: {
          keepRunner: true,
          specs: 'test/*.js',
          template: require('grunt-template-jasmine-requirejs')
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'public'
        }
      },
      test: {
        options: {
          port: 8080,
          hostname: null,
          keepalive: true
        }
      }
    }
  });

  // Default task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.registerTask('default', ['jshint', 'requirejs', 'jasmine']);

};
