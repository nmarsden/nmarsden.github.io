angular.module( 'makeEmGreen', [
  'ngAnimate',
  'templates-app',
  'templates-common',
  'meg.menu',
  'meg.home',
  'meg.gameStateService',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/menu' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $rootScope, gameStateService ) {

    $rootScope.$on("$stateChangeStart", function (event, next, current) {

        if ($rootScope.restorestate === undefined) {
            $rootScope.$broadcast('restorestate'); //let everything know we need to restore state
            $rootScope.restorestate = false;
        }
    });

    //let everything know that we need to save state now.
    window.onbeforeunload = function (event) {
        $rootScope.$broadcast('savestate');
    };
})

;

