module.exports = function(grunt) {
 
  grunt.registerTask('watch', [ 'watch' ]);
 
  grunt.initConfig({

    less: {
      style: {
        files: {
          "bumeran.min.css": "skins/bumeran/bumeran.less"
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: [
          "Android 2.3",
          "Android >= 4",
          "Chrome >= 20",
          "Firefox >= 24",
          "Explorer >= 9",
          "iOS >= 6",
          "Opera >= 12",
          "Safari >= 6"
        ]
      },
      core: {
        src: 'bumeran.min.css'
      }
    },

    cssmin: {
      target: {
        files: {
          'bumeran.min.css': "bumeran.min.css"
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['**/*.less'],
        tasks: ['less','autoprefixer','cssmin']
      },
      html: {
        files: ['**/*.html']
      }
    }

  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['less','autoprefixer','cssmin',]);
 
};
