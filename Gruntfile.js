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
        uglify: {
            cobra: {
                files: {
                    'build/assets/js/cobra.min.js': 'js/cobra.js'
                }
            },
            bundle: {
                files: {
                    'build/assets/js/bundle.min.js' : 'build/assets/js/bundle.js'
                }
            }
        },
        sprites: {
            icons: {
                src: 'public/assets/img/icons/*.png',
                destImg: 'build/assets/img/icons.png',
                destCSS: 'build/assets/css/icons.css'
            }
        },
        clean: {
            js: 'build/assets/js/**',
            css: 'build/assets/css',
            icons: 'build/assets/icons'
        },
        jshint: ['Gruntfile.js']
    });

    grunt.registerTask('js', 'Concatenate and minify static JavaScript assets',
        ['concat:js', 'uglify:bundle']);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['jshint']); // register a default task alias
};