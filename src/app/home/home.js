angular.module( 'meg.home', [
  'ui.router',
  'meg.gameStateService'
])

.config(function config( $stateProvider) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    }
  });
})

.controller( 'HomeCtrl', function HomeController( $scope, $modal, $location, gameStateService ) {

    var puz = [];
    puz[ 0] = [0,0,21,0 ,0];
    puz[ 1] = [21,21,0 ,21,21];
    puz[ 2] = [10,27,27,27,10];
    puz[ 3] = [0 ,27,0 ,17,27];
    puz[ 4] = [15,23,23,24,27];
    puz[ 5] = [0 ,0 ,21,21,14];
    puz[ 6] = [15,17,17,17,15];
    puz[ 7] = [0 ,4 ,10,21,10];
    puz[ 8] = [10,31,14,26,7 ];
    puz[ 9] = [14,14,14,0 ,0 ];
    puz[10] = [21,21,21,21,14];
    puz[11] = [31,10,27,14,10];
    puz[12] = [8 ,20,10,5 ,2 ];
    puz[13] = [0 ,0 ,2 ,2 ,2 ];
    puz[14] = [0 ,2 ,0 ,2 ,0 ];
    puz[15] = [1 ,1 ,1 ,1 ,31];
    puz[16] = [0 ,0 ,4 ,14,31];
    puz[17] = [4 ,10,21,10,4 ];
    puz[18] = [21,0 ,21,0 ,21];
    puz[19] = [0 ,0 ,17,0 ,0 ];
    puz[20] = [30,2 ,14,2 ,2 ];
    puz[21] = [14,17,17,17,14];
    puz[22] = [0 ,0 ,28,12,4 ];
    puz[23] = [0 ,0 ,17,31,18];
    puz[24] = [1 ,3 ,7 ,15,30];
    puz[25] = [17,17,31,17,17];
    puz[26] = [4 ,14,4 ,4 ,4 ];
    puz[27] = [0 ,0 ,28,28,28];
    puz[28] = [0 ,2 ,0 ,0 ,0 ];
    puz[29] = [0 ,0 ,4 ,0 ,0 ];
    puz[30] = [17,19,21,25,17];
    puz[31] = [31,8 ,4 ,2 ,31];
    puz[32] = [8 ,8 ,21,17,25];
    puz[33] = [20,17,17,22,30];
    puz[34] = [24,10,17,21,0 ];
    puz[35] = [4 ,10,17,31,17];
    puz[36] = [0 ,14,14,14,0 ];
    puz[37] = [21,10,21,10,21];
    puz[38] = [10,1 ,3 ,12,10];
    puz[39] = [0 ,0 ,10,0 ,0 ];
    puz[40] = [17,10,4 ,4 ,4 ];
    puz[41] = [7 ,9 ,7 ,9 ,7 ];
    puz[42] = [17,11,7 ,2 ,14];
    puz[43] = [0 ,27,31,4 ,14];
    puz[44] = [14,5 ,28,15,21];
    puz[45] = [4 ,14,31,14,4 ];
    puz[46] = [4 ,31,5 ,18,16];
    puz[47] = [0 ,17,4 ,17,0 ];
    puz[48] = [17,10,4 ,10,17];
    puz[49] = [31,31,31,31,31];
    puz[50] = [27,0 ,27,0 ,27];
    puz[51] = [31,4 ,0 ,4 ,31];
    puz[52] = [31,10,4 ,10,31];
    puz[53] = [10,17,0 ,27,17];
    puz[54] = [4 ,6 ,27,12,4 ];
    puz[55] = [10,31,21,31,10];
    puz[56] = [21,17,27,17,21];
    puz[57] = [0 ,0 ,14,2 ,0 ];
    puz[58] = [16,8 ,4 ,6 ,5 ];
    puz[59] = [0 ,21,17,21,17];
    puz[60] = [31,14,14,14,31];
    puz[61] = [17,10,0 ,10,17];
    puz[62] = [14,10,14,8 ,14];
    puz[63] = [15,9 ,15,7 ,9 ];
    puz[64] = [21,21,21,21,14];
    puz[65] = [14,2 ,14,8 ,14];
    puz[66] = [31,17,21,17,31];
    puz[67] = [21,0 ,21,0 ,21];
    puz[68] = [10,21,14,21,10];
    puz[69] = [21,0 ,0 ,0 ,21];
    puz[70] = [31,29,27,23,31];
    puz[71] = [31,4 ,31,17,17];
    puz[72] = [27,10,27,10,27];
    puz[73] = [4 ,10,31,17,31];
    puz[74] = [17,27,21,17,17];
    puz[75] = [31,21,31,21,31];
    puz[76] = [14,4 ,4 ,4 ,14];
    puz[77] = [14,10,31,14,27];
    puz[78] = [0 ,0 ,4 ,0 ,0 ];
    puz[79] = [17,0 ,4 ,0 ,17];
    puz[80] = [27,27,0 ,27,27];
    puz[81] = [10,0 ,17,14,4 ];
    puz[82] = [21,14,27,14,21];
    puz[83] = [17,19,21,25,17];
    puz[84] = [21,21,27,21,21];
    puz[85] = [4 ,4 ,14,21,21];
    puz[86] = [21,21,21,21,31];
    puz[87] = [0 ,14,14,14,0 ];
    puz[88] = [4 ,10,17,31,17];
    puz[89] = [21,10,21,10,21];
    puz[90] = [17,14,10,14,17];
    puz[91] = [4 ,10,17,10,4 ];
    puz[92] = [21,0 ,10,0 ,21];
    puz[93] = [10,31,10,31,10];
    puz[94] = [31,21,31,29,31];
    puz[95] = [17,10,4 ,10,17];
    puz[96] = [31,4 ,31,4 ,31];
    puz[97] = [31,14,4 ,14,31];
    puz[98] = [4 ,21,31,21,4 ];
    puz[99] = [31,31,31,31,31];

    var gameState = gameStateService.model;
    var squares = gameState.squares;
    var bestSolutions = gameState.bestSolutions;

    var showMenu = function() {
        $location.path("menu");
    };

    var initSquares = function(level) {
        var levelData = puz[level - 1];
        var i = 0, row = 0, len = 25;
        squares.length = 0;
        for (; i < len; i=i+5, row++) {
            squares.push({ id: i,   selected: !(levelData[row] & 1) });
            squares.push({ id: i+1, selected: !(levelData[row] & 2) });
            squares.push({ id: i+2, selected: !(levelData[row] & 4) });
            squares.push({ id: i+3, selected: !(levelData[row] & 8) });
            squares.push({ id: i+4, selected: !(levelData[row] & 16) });
        }
    };

    var initBoard = function() {
        initSquares(gameState.selectedLevel);
        gameState.movesTaken = 0;
        gameState.movesLeft = 15;
    };

    var replay = function() {
        if (!gameState.isLevelLocked) {
            gameState.isReplay = true;
            initBoard();
        }
    };

    var isGameWon = function() {
        var i = 0, len = squares.length;
        for(; i<len; i++) {
            if (!squares[i].selected) {
                return false;
            }
        }
        return true;
    };

    var indexToCoords = function(index) {
        return {row: Math.floor(index / 5), col: (index % 5)};
    };

    var coordsToIndex = function(coords) {
        return (coords.row * 5) + coords.col;
    };

    var adjustedCoords = function(coords, rowDiff, colDiff) {
        return {
            row: coords.row + rowDiff,
            col: coords.col + colDiff
        };
    };

    var calcSquaresToToggle = function(index) {
        var indexes = [ index ];
        var coords = indexToCoords(index);
        if (coords.col < 4) {
            indexes.push(coordsToIndex(adjustedCoords(coords, 0, +1)));
        }
        if (coords.col > 0) {
            indexes.push(coordsToIndex(adjustedCoords(coords, 0, -1)));
        }
        if (coords.row < 4) {
            indexes.push(coordsToIndex(adjustedCoords(coords, +1, 0)));
        }
        if (coords.row > 0) {
            indexes.push(coordsToIndex(adjustedCoords(coords, -1, 0)));
        }
        return indexes;
    };

    var showModal = function (modalContents) {
        var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            controller: ModalInstanceCtrl,
            resolve: {
                modalContents: function() {
                    return modalContents;
                }
            }
        });

        modalInstance.result.then(function () {
            modalContents.okHandler();
        }, function () {
            modalContents.cancelHandler();
        });
    };

    var selectPreviousLevel = function() {
        if (gameState.selectedLevel > 1) {
            gameState.selectedLevel--;
            gameState.isReplay = false;
            initBoard();
        }
    };

    var selectNextLevel = function() {
        if (gameState.selectedLevel < 100) {
            gameState.selectedLevel++;
            gameState.isReplay = false;
            initBoard();
        }
    };

    var gameLost = function() {
        showModal({
           title: "No Moves Left!",
           message: "I know you can do this. Give it another go?",
           okText: "Retry",
           okHandler: replay,
           cancelText: "Quit",
           cancelHandler: showMenu
        });
    };

    var isLevelPreviouslySolved = function(level) {
        return (level <= bestSolutions.length);
    };

    var updateBestSolutions = function() {
        if (gameState.movesTaken < gameState.bestSolution) {
            gameState.bestSolution = gameState.movesTaken;
            if (isLevelPreviouslySolved(gameState.selectedLevel)) {
                bestSolutions[gameState.selectedLevel-1] = gameState.bestSolution;
            } else {
                bestSolutions.push(gameState.bestSolution);
            }
        }
    };

    var gameWon = function() {
        updateBestSolutions();
        showModal({
            title: "Level Solved",
            message: "You are awesome! Ready for the next level?",
            okText: "Next Level",
            okHandler: selectNextLevel,
            cancelText: "Replay",
            cancelHandler: replay
        });
    };

    $scope.gameState = gameState;

    $scope.$watch('gameState.selectedLevel', function(selectedLevel) {
        gameState.isLevelLocked = (selectedLevel > (bestSolutions.length + 1));

        var isLevelSolved = isLevelPreviouslySolved(selectedLevel);

        gameState.isLevelSolved = isLevelSolved;
        gameState.bestSolution = isLevelSolved ? bestSolutions[selectedLevel - 1] : 999;
    });

    $scope.selectPreviousLevel = selectPreviousLevel;

    $scope.selectNextLevel = selectNextLevel;

    $scope.clickSquare = function(index) {
        var toggleIndexes = calcSquaresToToggle(index),
            i = 0,
            len = toggleIndexes.length;
        for (; i<len; i++) {
            var toggleIndex = toggleIndexes[i];
            gameState.squares[toggleIndex].selected = !gameState.squares[toggleIndex].selected;
        }
        gameState.movesTaken = gameState.movesTaken + 1;
        gameState.movesLeft = gameState.movesLeft - 1;

        if (isGameWon()) {
            gameWon();
        }
        else if (gameState.movesLeft === 0) {
            gameLost();
        }
    };

    $scope.showMenu = showMenu;

    $scope.replay = replay;

    $scope.isShowSolved = function() {
        return gameState.isLevelSolved && !gameState.isReplay;
    };

    $scope.starsEarned = [
            { id: 0, earned: true},
            { id: 1, earned: true},
            { id: 2, earned: false}
        ];

    initBoard();
});

var ModalInstanceCtrl = function ($scope, $modalInstance, modalContents) {

    $scope.modalContents = modalContents;

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};

