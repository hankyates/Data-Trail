/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      version: '0.1.0',
      banner: '/*! Datarail - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://hankyates.com/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Hank Yates; Licensed MIT */'
    },
    lint: {
      files: [
        'grunt.js',
        'src/*.js',
        'src/components/*.js',
        'src/entities/*.js',
        'src/interfaces/*.js',
        'src/scenes/*.js',
        'test/**/*.js'
      ]
    },
    requirejs: {
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:src/public/js/datarail.min.js>'],
        dest: 'public/js/datarail.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:lint.files>','<config:concat.dist.dest>'],
        dest: 'public/js/datarail.min.js'
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint'
    },
    jshint: {
      options: {
        curly: true,
        laxcomma: true,
        laxbreak: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: false,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true,
        Crafty: true
      }
    },
    jasmine: {
      src: ['src/*.js',
           'src/*.js',
           'src/components/*.js',
           'src/entities/*.js',
           'src/interfaces/*.js',
           'src/scenes/*.js'],
      specs: 'test/*.js'
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint concat min');
  grunt.loadNpmTasks('grunt-jasmine-runner');
  grunt.loadNpmTasks('grunt-requirejs');

};
