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


    app.factory("filterService", function () {
        console.log('filter service create');
        return {
            activeFilters: {},
            searchText: ''
        };
    });

    app.controller("MainController", function ($scope) {
        $scope.controllerIs = 'MainController';
    });

    app.controller("FilterController", function ($scope, filterService) {
        $scope.controllerIs = 'FilterController';

        $scope.filterService = filterService;

        $scope.prod = {
            name: 'Micky triger Team Whiteside'
        };
    });

    app.controller("ListController", function ($scope, filterService) {

        $scope.controllerIs = 'ListController';

        $scope.filterService = filterService;


        $scope.productList = [
            {
                sku: "ASD_WH",
                desc: "Awesome Washing machine",
                applianceType: "Washing Machine",
                brand: "Hotpoint",
                isTop5: true
            },
            {
                sku: "LKPEPE_WH",
                desc: "Great Kettle",
                applianceType: "Kettle",
                brand: "Hotpoint",
                isTop5: false
            },
            {
                sku: "KLWEW_WH",
                desc: "Nonsense Kettle",
                applianceType: "Kettle",
                brand: "samsung",
                isTop5: true
            }

        ];

    });

    app.controller("ListFilterController", function ($scope, filterService) {
        $scope.filterService = filterService;
    });


} ());



