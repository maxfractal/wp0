module.exports = function (grunt) {
    grunt.initConfig({
        jshint: ['Gruntfile.js']
    });
    grunt.initConfig({
        less: {
            compile: {
                files: {
                    'build/assets/css/compiled.css': 'less/*.less'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['jshint']); // register a default task alias
};