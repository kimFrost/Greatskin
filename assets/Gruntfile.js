/*global module:false*/
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		banner: '',
		// Task configuration.
		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: true
			},
			head: {
				src: [
					'js/libs/html5shiv.js',
					'js/libs/namespace/namespaces.js',
					'js/libs/angular/1.2.14/angular.js',
					//'js/libs/angular/angular-file-upload-0.5.7/angular-file-upload.min.js',
					'js/libs/modernizr/modernizr.custom.21372.js',
					'js/greatskin.js'
				],
				dest: '../scripts/greatskin.js'
			},
			greatskin: {
				src: [
					'js/angular.greatskin.js',
					'js/controllers/angular.controller.greatskin.js'
				],
				dest: '../scripts/greatskin.js'
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			head: {
				src: '<%= concat.head.dest %>',
				dest: '../scripts/greatskin.min.js'
			},
			greatskin: {
				src: '<%= concat.greatskin.dest %>',
				dest: '../scripts/greatskin.min.js'
			}
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb'
					//noLineComments: false
				}
			}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: '../css/',
				src: ['*.css', '!*.min.css', '!Icon*.css', '!RTE*.css'],
				dest: '../css/',
				ext: '.min.css'
			}
		},
		copy: {
			main: {
				files: [
					{ expand: true, cwd: 'img/', src: ['**', '!**/*.db', '!*.db'], dest: '../img/' },
					{ expand: true, cwd: 'font/', src: ['**'], dest: '../font/' },
					{ expand: true, cwd: 'icons/', src: ['*.svg', '*.eot', '*.woff', '*.ttf'], dest: '../fonts/' }
				]
			}
		},
		watch: {
			scripts: {
				files: ['<%= concat.greatskin.src %>',
					'<%= concat.head.src %>'],
				tasks: ['concat']
			},
			images: {
				files: ['img/**',
					'img/**/*'],
				tasks: ['copy']
			},
			styles: {
				files: ['scss/**',
					'scss/**/*'
					],
				tasks: ['compass']
			},
			jade: {
				files: ["views/*.jade","views/pages/*.jade"],
				tasks: ["jade"]
			}
		},
		jade: {
			compile: {
				options: {
					pretty: true,
					data: {
						debug: false
					}
				},
				files: [ {
					cwd: "views/pages",
					src: "**/*.jade",
					dest: "../",
					expand: true,
					ext: ".html"
				} ]
			}
		},
		cactuspilot: {
			dist: {
				options: {

				},
				files: {
					'../cactus/': '../css/greatskin.css'
				}
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-cactuspilot');
	// Default task.
	grunt.registerTask('default', ['concat', 'copy', 'compass', 'cssmin', 'uglify']);
	grunt.registerTask('dev', ['concat', 'copy', 'compass', 'watch']);
	grunt.registerTask('renderview', ['jade']);
	grunt.registerTask('mee', ['cactuspilot']);
};