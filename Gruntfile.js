module.exports = function(grunt) {
 
  grunt.initConfig({

    less: {
      style: {
        files: {
          "bumeran.css": "skins/bumeran/bumeran.less"
        },
        options: {
          compress: false
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
        src: 'bumeran.css'
      }
    },

    cssmin: {
      target: {
        files: {
          'bumeran.min.css': 'bumeran.css'
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['**/*.less','*.less','**/**/*.less'],
        tasks: ['less','autoprefixer','cssmin','dss']
      },
      html: {
        files: ['**/*.html']
      }
    },

    dss: {
      docs: {
        files: {
          'docs/': 'bumeran.css'
        },
        options: {
          template: 'docs_themes/',
          include_empty_files: false,
          parsers: {
            unique_id: function(i, line, block){
              return line;
            }
          }
        }
      }
    }

  });
 
  //grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-dss');

  //grunt.registerTask('watch', ['watch']);
  //grunt.registerTask('dss', 'dss');
  grunt.registerTask('default', ['less','autoprefixer','cssmin']);
 
};
