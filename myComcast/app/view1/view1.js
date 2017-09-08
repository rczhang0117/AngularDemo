'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
    $http.get("./data.json").then(function(response){
        $scope.datas = response.data;
    });
    
    $scope.reverse = false;
    $scope.sort = function(propName) {
        $scope.reverse = ($scope.keyProp == propName)?!$scope.reverse:false;
        $scope.keyProp = propName;
    }
}]);