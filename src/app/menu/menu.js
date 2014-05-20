angular.module('meg.menu', [
  'ui.router',
  'ui.bootstrap'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('menu', {
      url: '/menu',
      views: {
        'main': {
          controller: 'MenuCtrl',
          templateUrl: 'menu/menu.tpl.html'
        }
      },
      data: { pageTitle: 'Menu' }
    });
  }
]).controller('MenuCtrl', [
  '$scope',
  function MenuCtrl($scope) {
  }
]);
;