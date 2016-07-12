//scripts/MainCtrl.js

angular
	.module('avengersApp')
	.controller('MainCtrl', function($scope, dataService) {

	

    $scope.getHeroes = function() {
        $scope.avengers = dataService.avengers;
    }
		
    console.log(dataService);

	}); //end
