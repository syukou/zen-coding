module.exports = function(grunt) {
	var pkg = grunt.file.readJSON('package.json');
	//グラントタスクの設定
	grunt.initConfig({
		//sassの設定
		sass: {
			ddist: {
				files: {
					'css/base.css': 'sass/base.scss',
					'css/common.css': 'sass/common.scss',
					'css/module.css': 'sass/module.scss',
					'css/page_blog.css': 'sass/page_blog.scss',
					'css/page_post.css': 'sass/page_post.scss'
				}
			}
		},
		//watchの設定
		watch: {
			dev: {
				files: [
					'sass/base.scss',
					'sass/common.scss',
					'sass/module.scss',
					'sass/page_blog.scss',
					'sass/page_post.scss'
				],
				tasks: ['sass']
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
};