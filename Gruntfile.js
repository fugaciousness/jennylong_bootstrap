'use strict';

/*
* GRUNT.JS is automated task runner for projects.
* it runs a server, compiles .less stylesheets, and
* performs any other repetitive tasks. (http://gruntjs.com/)
*/
/*
* This project contains the following Grunt Plugins:
* 1. grunt less compiler  (https://github.com/gruntjs/grunt-contrib-less)
* 2. watch for file changes (https://github.com/gruntjs/grunt-contrib-watch)
* 3. run a connect middleware server (https://github.com/gruntjs/grunt-contrib-connect)
*/


// project configuration.
module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
               files:{
                    "css/styles.css" : "css/less/styles.less"
               }
            }
        },
        watch: {
            options: {
                livereload: true //reload the files after changes are made
            },
            styles: {
                // Which files to watch (all .less files recursively in the less directory)
                files: ['css/less/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true,
                    reload: true
                }
            }
        },
        // Creates a connect server on nodejs for serving all the files
        connect: {
            'static': {
                options: {
                    hostname: 'localhost',
                    port: 9001
                }
            },
            server: {
                options: {
                    hostname: 'localhost',
                    port: 9000
                }
            }
        }
    });


    // Load all of our grunt.js tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // run the following tasks at once by typing `grunt server` into the command prompt
    grunt.registerTask('server', ['connect:static', 'connect:server', 'watch']);
};
