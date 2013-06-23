/// <reference path="External/Angular/angular.js" />
/// <reference path="Shared/global.js" />

(function () {
    var app = angular.module("MainApp", ['ui.bootstrap']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/MainMenu', {
                controller: 'MainController',
                templateUrl: '../Templates/FileteredData.htm'
            })
            .otherwise({ redirectTo: '/MainMenu' });
    } ]);

    app.controller("MainController", function ($scope) {
        $scope.myNmae = 'Mick';
    });

} ());



