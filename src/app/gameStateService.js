angular.module( 'meg.gameStateService', [
])

.factory('gameStateService', ['$rootScope', function ($rootScope) {

    var service = {

        model: {
            // Properties reset on page refresh
            bestSolution: 999,
            movesTaken: 0,
            movesLeft: 15,
            squares: [],
            isLevelLocked: false,
            isLevelSolved: false,
            isReplay: false,

            // Properties saved to local storage
            selectedLevel: 1,  // values in range: 1 to 100
            bestSolutions: []
        },

        saveState: function () {
            var state = {
                selectedLevel: service.model.selectedLevel,
                bestSolutions: service.model.bestSolutions
            };
            localStorage.gameStateService = angular.toJson(state);
        },

        restoreState: function () {
            if (localStorage.gameStateService) {
                var state = angular.fromJson(localStorage.gameStateService);
                service.model.selectedLevel = state.selectedLevel;
                service.model.bestSolutions = state.bestSolutions;
            }
        }
    };

    $rootScope.$on("savestate", service.saveState);
    $rootScope.$on("restorestate", service.restoreState);

    return service;
}]);