
module.exports = function(grunt) {
    grunt.initConfig({
       //grunt clean
        clean: {
            build: {
              src: ['path/to/dir/one', 'path/to/dir/two']
            }
          },
         // sass compile
          sass: {                              // Task
            dist: {                            // Target
              options: {                       // Target options
                style: 'expanded'
              },
              files: {                         // Dictionary of files
                'main.css': 'main.scss',       // 'destination': 'source'
                'widgets.css': 'widgets.scss'
              }
            }
          },
          // grunt copy
          copy: {
            main: {
              files: [
                // includes files within path
                {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},
          
                // includes files within path and its sub-directories
                {expand: true, src: ['path/**'], dest: 'dest/'},
          
                // makes all src relative to cwd
                {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},
          
                // flattens results to a single level
                {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
              ],
            },
          },
          // watch css
          watch: {
            css: {
              files: '**/*.sass',
              tasks: ['sass'],
              options: {
                livereload: true,
              },
            },
          },
          // concat
          concat: {
            options: {
              separator: ';',
            },
            dist: {
              src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
              dest: 'dist/built.js',
            },
          },
          // minify js
          uglify: {
            my_target: {
              files: {
                'dest/output.min.js': ['src/input1.js', 'src/input2.js']
              }
            }
          },
          // minify css
          cssmin : {
            target : {
                src : ["css/style1.css", "css/style2.css"],
                dest : "dist/style.min.css"
            }
        },
       //grunt builder
       builder: {
        app: {
          src: 'index.html',
          options: {
            //builder options
          }
        }
      },
      //grunt open
      open : {
        dev : {
          path: 'http://127.0.0.1:5500/index.html',
          app: 'Google Chrome'
        },
        build : {
          path : 'http://google.com/',
          app: 'Firefox'
        },
        file : {
          path : '/etc/hosts'
        },
        custom: {
          path : function () {
            return grunt.option('path');
          } 
        }
      },
      //grunt template
      'template': {
        'options': {
          // Task-specific options go here
        },
        'your-target': {
          'options': {
            // Target-specific options go here
          },
          'files': {
            // Target-specific file lists go here
            
              'projectSkeleton': ['Gruntfile.js','package-lock.json','package.json']
            

          }
        }
      }

          









    });  
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-builder');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-template');
   
    grunt.registerTask('default', ['builder', 'concat', 'uglify', 'cssmin','open']);
};


