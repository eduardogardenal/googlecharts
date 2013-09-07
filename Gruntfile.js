module.exports = function(grunt) {
  grunt.loadTasks('../vendor/amber/grunt/tasks/');

  grunt.registerTask('default', ['amberc:googlecharts']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),

    amberc: {  
      options: {
        amber_dir: '../vendor/amber',
        closure_jar: '',
        verbose: true
      },
      googlecharts: {
        src: ['st/GoogleLoader.st','st/GoogleCharts.st', 'st/GoogleChartsExamples.st'],
        output_dir: 'js',
        libraries:[ 'Canvas'],
        jsGlobals: ['google'],
        amd_namespace: 'google-charts-example'
      }
    }
  });

}
