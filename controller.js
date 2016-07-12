angular.module('userProfiles').controller('MainController', function($scope, mainService){
    
    $scope.getUsers = function() {
    	$scope.users = mainService.getUsers();
    }

    $scope.getUsers();

    $scope.toggleFavorite = function(index) {
    	mainService.toggleFavorite(index);
    	$scope.getUsers();
   		console.log($scope.users);
    }
   
})