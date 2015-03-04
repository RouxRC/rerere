'use strict';

angular.module('rerere.view_board', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view_board', {
    templateUrl: 'view_board/board.html',
    controller: 'BoardCtrl'
  });
}])

.controller('BoardCtrl', [function() {
  $('div.split-pane').splitPane()

  window.editor = ace.edit("js-editor");
  window.editor.setTheme("ace/theme/chrome");
  window.editor.setFontSize(14)
  window.editor.getSession().setMode("ace/mode/javascript");
}]);