module.exports = function (grunt) {
    grunt.initConfig({
        jshint: ['Gruntfile.js']
    });
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
                    'build/assets/js/bundle.js': 'js/**/*.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['jshint']); // register a default task alias
};