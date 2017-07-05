var app = angular.module("reserve", ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/home', {
        templateUrl: 'home.html',
        controller: 'MainCtrl'
    }).
    when('/user', {
        templateUrl: 'user.html',
        controller: 'MainCtrl'
    }).
    when('/edit', {
        templateUrl: 'edit.html',
        controller: 'editCtrl'
    }).
    when('/boss', {
        templateUrl: 'boss.html',
        controller: 'MainCtrl'
    }).
    otherwise({redirectTo: '/home'})
}])



.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
    $scope.reserveOrder = function(){
        $http.post('/reservation', {
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            phone: $scope.phone,
            date: $scope.date,
            party: $scope.party,
            time: $scope.time
        }).then(function(response){
            $scope.firstname = "";
            $scope.lastname = "";
            $scope.phone = "";
            $scope.date = "";
            $scope.party = "";
            $scope.time = "";
            alert('success');
            console.log(response.data);
            $scope.confirmationCode = response.data._id;
        });
            
    };
}])

.controller('editCtrl', ['$scope', '$http', function($scope, $http){
    $scope.reservation = {};
    $scope.getOrder = function(){
        $http.post('/edit', $scope.orderId).then(function(response){
            if(!response.data[0]){
                alert('No such reservation');
            }else{
                $scope.reservation.firstname = response.data[0].firstname;
                $scope.reservation.lastname = response.data[0].lastname;
                $scope.reservation.phone = response.data[0].phone;
                $scope.reservation.date = new Date(response.data[0].date);
                $scope.reservation.party = response.data[0].party;
                $scope.reservation.time = new Date(response.data[0].time);
                alert('Success');
            }
        });
    };
    
    $scope.cancelOrder = function(){
        $http.post('/edit/cancel', $scope.orderId).then(function(response){
            $scope.orderId.code = null;
            $scope.reservation.firstname = null;
            $scope.reservation.lastname = null;
            $scope.reservation.phone = null;
            $scope.reservation.date = null;
            $scope.reservation.party = null;
            $scope.reservation.time = null;
            alert('Your order has been cancelled'); 
        });
        
    };
    
    $scope.updateOrder = function(){
        $scope.reservation.code = $scope.orderId.code;
        $http.post('/edit/update', $scope.reservation).then(function(response){
            $scope.orderId = {};
            $scope.reservation = {};
            
            alert('Update successfully');
        });
    };
}]);
    

    
    


