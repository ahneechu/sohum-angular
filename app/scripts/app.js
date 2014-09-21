'use strict';

// Declare app level module which depends on views, and components
angular.module('sohumApp', [
  'ngRoute',
  'ngAnimate',
  'ngTouch',

  'sohumControllers',
  'myApp.version'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        activetab: 'home'
      }).
  	when('/collection', {
        templateUrl: 'views/collection.html',
        controller: 'CollectionCtrl',
        activetab: 'collection'
      }).
  	when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        activetab: 'about'
      }).
  	when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        activetab: 'contact'
      }).

  	otherwise({redirectTo: '/'});
}]);
