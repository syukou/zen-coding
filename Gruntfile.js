module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			compile: {
				expand: true,
				flatten: true,
				src: ['sass/*.scss'],
				dest: 'css',
				ext: '.css'
			}
		},
		watch: {
			sass: {
				files: ['sass/*.scss'],
				tasks: ['sass']
			},
			html_files: {
				files: '/*.html'
			},
			options: {
				livereload: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['watch','sass']);
};