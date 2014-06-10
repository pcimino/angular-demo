module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*
     * Project settings.  These are properties defined in one place and reused throughout the build script.
     * Properties:
     *    app - the root directory of the source files
     *    targetDir - the directory where the final build output is stored
     *    build - the temporary working directory
     */
    properties: {
        app: 'angular-demo',
        targetDir: 'target/target-app/',
        build: 'build'
    },

    meta: {
        banner:
            ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * <%= pkg.author %>\n' +
            ' *\n' +
            ' * Copyright (c) <%= pkg.licenses.copyright %> \n' +
            ' * Licensed <%= pkg.licenses.type %> <<%= pkg.licenses.url %>>\n' +
            ' \n'
    },

    // clean out packaging directories
    clean: {
      main: { src: [ '<%= properties.build %>', 'target' ] },
      coverage: {src: ['coverage'] }
    },

    // concatenate files in to one package
    concat: {
        options: {
          separator: ';'
        },
        dist: {
          src: ['src/<%= properties.app %>.js', 'src/**/*.js', '!src/lib/**/*.js'],
          dest: '<%= properties.build %>/<%= pkg.name %>.js'
        }
    },

    /* ISSUE with cssmin
     * for now copy the css files
     * and set the file list in cssmin to NOT (!)
     * cannot simply remove the cssmin task yet, breaks the usemin step
     */
    // copy files to packing directories
    copy: {
        main: {
            files: [
              { expand: true, cwd: 'src/', src: ['**/*.html', 'lib/**/*.js', 'config/*.js', 'images/**/*', 'css/**/*'], dest: '<%= properties.targetDir %>'}
            ]
        },
        expand: {
          files: [
            { expand: true, cwd: 'src/', src: ['**/*.js', '!config/*.js'], dest: '<%= properties.build %>/'}
          ]
        }
    },

    // minify the CSS files
    cssmin: {
      add_banner: {
        options: {
          banner: '/* angular-demo Minified CSS \n<%= meta.banner %> */\n'
        },
        files: {
          '<%= properties.targetDir %>css/<%= pkg.name %>.min.css': ['src/css/**/*.css', '!src/css/**/demo-sample.css', '!src/css/**/ie.css', '!src/css/**/account_summary.css']
        }
      }
    },

    // qunit test location
    qunit: {
        files: ['test/qunit/*.html']
    },
    // Karma runs jasmine tests
    karma: {
        unit: {
            configFile: './test/karma.conf.js'
        },
        debug: {
            configFile: './test/karma-debug.conf.js'
        }
    },

    // lint for JS to check for consistent coding conventions and quality
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', '!src/lib/**/*.js'], // , 'test/unit/**/*.js', 'src/**/*.html'
      options: {
        ignores: ['src/config/**/GlobalConfig.js'],
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        },
        predef: ['angular', 'Chart', 'alert', 'globalConfig']
      }
    },

    // watch for file changes and rerun jobs as defined
    watch: {
      debug: {
        files: ['<%= jshint.files %>', 'src/**/*.html', 'test/**/*Spec.js'],
        tasks: [ 'test' ]
      },
      deploy: {
        files: ['<%= jshint.files %>', 'src/**/*.html', 'test/**/*Spec.js'],
        tasks: [ 'preProcess-deployment', 'postProcess-deployment' ]
      }
    },

    // Renames files for browser caching purposes
    rev: {
        files: {
            src: ['<%= properties.targetDir %>**/*.{js,css}']
        }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: 'src/**/*.html',
      options: {
        flow: {
            html: {
            steps: {
              js: ['concat']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
        html: ['<%= properties.targetDir %>**/*.html'],
        css: ['<%= properties.targetDir %>**/*.css']
    },
    uglify: {
        options: {
          banner: '/*! <%= meta.banner %> */\n',
          mangle: false,
          compress: {
              global_defs: {
                "DEBUG": false /* wrap code in if (DEBUG) {} and these code blocks will be removed, can setup build flag for local vs prod */
              },
              dead_code: true
          }
        },
        target: {
          files: {
            '<%= properties.targetDir %><%= pkg.name %>.min.js': ['<%= properties.build %>/<%= pkg.name %>.js']
          }
        }
    },
    cachebuster: {
      options: {
        banner: '/*! <%= meta.banner %> */\n',
        format: 'json',
        basedir: '<%= properties.build %>/'
      },
      '<%= properties.targetDir %>cachebusters.json': [ '<%= properties.build %>/<%= pkg.name %>.js', '<%= properties.build %>/**/*.css' ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-cachebuster');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-rev');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('karma-debug', 'Debug Karma tests in verbose, continuous mode', ['karma:debug']);
  grunt.registerTask('test-deploy', 'Run JSHint, QUnit and Jasmine tests', ['jshint', 'karma:unit']);
  grunt.registerTask('test-debug', 'Run JSHint, QUnit and Jasmine tests', ['jshint', 'karma-debug']);
  grunt.registerTask('default', 'Run tests and watch', [ 'test', 'watch:debug']);

  grunt.registerTask('preProcess-deployment', 'Pre deployment setup', ['clean:coverage', 'jshint', 'clean:main', 'concat', 'cssmin', 'copy:main']);
  grunt.registerTask('postProcess-deployment', 'Post deployment processing', [ 'useminPrepare', 'uglify', 'rev', 'usemin', 'cachebuster', 'test-deploy' ]);
  grunt.registerTask('postProcess-debug', 'Post deployment processing', [ 'useminPrepare', 'uglify', 'rev', 'usemin', 'cachebuster', 'test-debug' ]);

  grunt.registerTask('deploy', 'Deployment for local development', [ 'preProcess-deployment', 'postProcess-deployment', 'watch:deploy']);
  grunt.registerTask('deploy-once', 'Deployment - build and run tests once', [ 'preProcess-deployment', 'postProcess-deployment']);
  grunt.registerTask('deploy-debug', 'Deployment and debug locally', [ 'preProcess-deployment', 'postProcess-debug']);

};
