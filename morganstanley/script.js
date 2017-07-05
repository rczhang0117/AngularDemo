
angular.module ('myApp',[])
  .controller('myCtrl',['$scope', '$http', function($scope, $http){
      $http.get("records.json").then(function(response){
         $scope.datas = response.data; 
      });
    
    
      $scope.reverse = false;
      $scope.Sort = function(propName){
         $scope.reverse = ($scope.keyProp == propName)?!$scope.reverse :false;
         $scope.keyProp = propName;
         $scope.flag = !$scope.flag; 
         $scope.hideAll = false;
      }
      
      $scope.hideAll = true;
      $scope.flag = false;
      
      $scope.totalDisplayed = 3;
      $scope.loadMore = function(){
          $scope.totalDisplayed += 3;
      }
}]);

/*https://plnkr.co/edit/tE3QDCxiQ4qOTruRJT0k?p=preview*/