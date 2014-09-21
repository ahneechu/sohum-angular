'use strict';

var sohumControllers = angular.module('sohumControllers', []);

angular.module('sohumApp')
	.controller('ContactCtrl', ['$scope', function ($scope){
		$scope.user = null;
		$scope.master = null;
		$scope.save = function(){
			$scope.master = angular.copy($scope.user);
		};
	}]);