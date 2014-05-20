angular.module('templates-app', ['home/home.tpl.html', 'menu/menu.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"text-center\">\n" +
    "    <button type=\"button\" class=\"btn btn-default btn-lg\" ng-click=\"selectPreviousLevel()\">\n" +
    "        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
    "    </button>\n" +
    "    <span class=\"badge\">Level {{gameState.selectedLevel}}</span>\n" +
    "    <button type=\"button\" class=\"btn btn-default btn-lg\"  ng-click=\"selectNextLevel()\">\n" +
    "        <span class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "    </button>\n" +
    "</div>\n" +
    "<div class=\"board-container\">\n" +
    "    <div class=\"board noselect\">\n" +
    "        <div class=\"board-square\"\n" +
    "             ng-repeat=\"square in gameState.squares\"\n" +
    "             ng-click=\"clickSquare($index)\"\n" +
    "             ng-class=\"{selected: square.selected}\">&nbsp;</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"text-center\"><span class=\"badge\">Moves Left: {{gameState.movesLeft}}</span></div>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"modal.html\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <h3 class=\"modal-title\">{{modalContents.title}}</h3>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        {{modalContents.message}}\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button class=\"btn btn-primary\" ng-click=\"ok()\">{{modalContents.okText}}</button>\n" +
    "        <button class=\"btn btn-warning\" ng-click=\"cancel()\">{{modalContents.cancelText}}</button>\n" +
    "    </div>\n" +
    "</script>\n" +
    "");
}]);

angular.module("menu/menu.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu/menu.tpl.html",
    "<div class=\"well well-lg\">\n" +
    "    <p class=\"lead\">In a world where there are <span class=\"highlight unselected\">non-green</span> blocks,\n" +
    "you have been tasked with making them all <span class=\"highlight selected\">green</span>!</p>\n" +
    "\n" +
    "    <button class=\"btn btn-default btn-block btn-start\" ui-sref=\"home\">Start</button>\n" +
    "</div>");
}]);
