'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', function($scope, $http) {
    $scope.groupByName = null;
    $http.get("./data.json").then(function(response){
       $scope.datas = response.data;
        const myMap = new Map();
        $scope.datas.forEach(data => {
            if(!myMap.has(data.name)){
                myMap.set(data.name, {C1:0, C2:0,C3:0});
                
            }
            myMap.get(data.name)[data.category] += data.amount;
        })
        $scope.groupByName = [...myMap];
    });
    
}]);