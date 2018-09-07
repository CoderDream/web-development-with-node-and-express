module.exports = function(grunt){

	// load plugins
	[
		'grunt-cafe-mocha',
		'grunt-contrib-jshint',
		'grunt-exec',
	].forEach(function(task){
		grunt.loadNpmTasks(task);
	});

	// configure plugins
	grunt.initConfig({
		cafemocha: {
			all: { src: 'qa/tests-unit.js', options: { ui: 'tdd' }, }
		},
		jshint: {
			files: ['meadowlark.js', 'public/js/**/*.js', 'lib/**/*.js','Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
			options: {
			    esnext: true
            }
		},
		exec: {
			linkchecker: { cmd: 'linkchecker http://localhost:3000' }
		},
	});	

	// register tasks
	grunt.registerTask('default', ['cafemocha','jshint','exec']);
};
