module.exports = function(grunt) {
	var pkg = grunt.file.readJSON('package.json');
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
			options: {
				livereload: true
			}
		}
	});

	var taskName;
	for(taskName in pkg.devDependencies) {
		if(taskName.substring(0, 6) == 'grunt-') {
			grunt.loadNpmTasks(taskName);
		}
	}
	grunt.registerTask('default', ['watch']);
};