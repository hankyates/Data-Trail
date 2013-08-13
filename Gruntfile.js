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
      all: [
        'app/src/**/*.js',
        'test/**/*.js'
      ]
    },
    requirejs: {
      compile: {
        options: {
          name: 'require-config',
          mainConfigFile: 'app/require-config.js',
          out: 'public/js/datatrail-min.js',
          optimize: 'none',
          shim: {
            easel: {
              exports: 'createjs'
            }
          },
          paths: {
            easel: 'lib/easeljs-0.6.0.min'
          }
        }
      }
    },
    watch: {
      files: [ 
        'public/js/src/**/*.js',
        'test/**/*.js'
      ],
      tasks: ['jshint','requirejs', 'jasmine']
    },
    jasmine: {
      all:{
        options: {
          specs: 'test/**/*.js',
          keepRunner: true,
          host: null,
          template: require('grunt-template-jasmine-requirejs'),
          templateOptions: {
            requireConfigFile: 'app/require-config.js',
            requireConfig: {
              baseUrl: 'app'
            }
          }
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          keepalive: true,
          hostname: null
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
