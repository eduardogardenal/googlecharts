module.exports = function(grunt) {
  grunt.loadTasks('../node_modules/amber-dev/tasks/');
 
 
  grunt.registerTask('default', ['amberc:googlecharts']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),

    amberc: {  
      options: {
        amber_dir: '../bower_components/amber',
        closure_jar: '',
        verbose: true
      },
      googlecharts: {
        src: ['src/GoogleLoader.st','src/GoogleCharts.st', 'src/GoogleChartsExamples.st'],
        output_dir: 'src/',
        libraries:[ 'Web'],
        jsGlobals: ['google'],
        amd_namespace: 'google-charts-example'
      }
    }
  });

}
