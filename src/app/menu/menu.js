angular.module( 'meg.menu', [
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'menu', {
    url: '/menu',
    views: {
      "main": {
        controller: 'MenuCtrl',
        templateUrl: 'menu/menu.tpl.html'
      }
    }
  });
})

.controller( 'MenuCtrl', function MenuCtrl( $scope ) {
})

;
