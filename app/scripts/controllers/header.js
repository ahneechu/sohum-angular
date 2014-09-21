'use strict';

var sohumControllers = angular.module('sohumControllers', []);

angular.module('sohumApp')
	.controller('HeaderCtrl', ['$scope', '$route', function ($scope, $route){
		$scope.$route = $route;

	}]);