module.exports = function(grunt)
{
  grunt.initConfig({

    copy:{
      public: {
        cwd: 'public',
        src: '**',
        dest: 'dist',
        expand: true
      }
    },
    clean:{
      dist:{
        src:'dist'
      }
    },

    useminPrepare:{
      html:'dist/**/*.html'
    },

    usemin:{
      html:'dist/**/*.html'
    },

  	clean:{
  		wprecss:{
        src:'dist/sass'
      },
    },

    sass: {
      compilar: {
        expand: true,
        cwd: 'public/sass',
        src: ['*.scss'],
        dest: 'public/css',
        ext: '.css'
      }
    },
    cmq: {
      options: {
        log: false
      },
      combine: {
        files:{
          'public/css':['public/css/*.css']
        }
      }
    },
    watch: {

      sass: {

        options:{
          event: ['added', 'changed'] 
        },

        files: ['public/sass/**/*.scss','public/sass/*.scss'],
        tasks: 'sass:compilar'
      }
    },

    browserSync: {
      public:{
        bsFiles:{
          src: ['public/**/*']
        },
        options:{
          watchTask: true,
          server:{
            baseDir:"public"
          }
        }
      }
    }
  });

  
  grunt.registerTask('server',['browserSync','watch']);
  grunt.registerTask('dist', ['clean', 'copy']);

  grunt.registerTask('minifica', ['useminPrepare','concat','uglify','cssmin','usemin']);
  grunt.registerTask('clearsass',['clean:wprecss'])
  grunt.registerTask('default', ['dist', 'minifica','clearsass']);

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-combine-media-queries');
}