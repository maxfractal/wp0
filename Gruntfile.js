module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            compile: {
                files: {
                    'build/assets/css/compiled.css': 'less/**/*.less'
                }
            }
        },
        concat: {
            js: {
                files: {
                    'build/assets/js/bundle.js': 'js/**/*.js'
                }
            }
        },
        sass: {
            compile: {
                files: {
                    'build/assets/css/style.css': 'scss/**/*.scss'
                }
            }
        },
        jshint: ['Gruntfile.js']
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['jshint']); // register a default task alias
};