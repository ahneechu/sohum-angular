'use strict';

var sohumControllers = angular.module('sohumControllers', []);

angular.module('sohumApp')
	.controller('CollectionCtrl', ['$scope', function ($scope) {
		$scope.collections = [
			{
				'image': 'images/collection_img/nino_img/nino_img1.jpg',
				'details': 'white hat',
				'title': 'Mustache swag kogi church-key, Vice lomo art party',
				'price': '50'
			},
			{
				'image': 'images/collection_img/nino_img/nino_img2.jpg',
				'details': 'white dress',
				'title': 'Mustache swag kogi church-key, Vice lomo art party',
				'price': '75'
			},
			{
				'image': 'images/collection_img/nino_img/nino_img3.jpg',
				'details': 'blue dress',
				'title': 'Mustache swag kogi church-key, Vice lomo art party',
				'price': '95'
			},
			{
				'image': 'images/collection_img/nino_img/nino_img4.jpg',
				'details': 'blue halter top',
				'title': 'Mustache swag kogi church-key, Vice lomo art party',
				'price': '50'
			},
			{
				'image': 'images/collection_img/nino_img/nino_img5.jpg',
				'details': 'black dress',
				'title': 'Mustache swag kogi church-key, Vice lomo art party',
				'price': '60'
			},
			{
				'image': 'images/collection_img/nino_img/nino_img6.jpg',
				'details': 'camaflague dress',
				'title': 'Mustache swag kogi church-key, Vice lomo art party',
				'price': '80'
			},
			{
				'image': 'images/collection_img/nino_img/nino_img7.jpg',
				'details': 'black sweater',
				'title': 'Mustache swag kogi church-key, Vice lomo art party',
				'price': '45'
			},
			{
				'image': 'images/collection_img/nino_img/nino_img8.jpg',
				'details': 'gray shirt',
				'title': 'Mustache swag kogi church-key, Vice lomo art party',
				'price': '110'
			},
			{
				'image': 'images/collection_img/nino_img/nino_img9.jpg',
				'details': 'black vest',
				'title': 'Mustache swag kogi church-key, Vice lomo art party',
				'price': '90'
			},
			{
				'image': 'images/collection_img/nino_img/nino_img10.jpg',
				'details': 'black top',
				'title': 'Mustache swag kogi church-key, Vice lomo art party',
				'price': '75'
			},
			{
				'image': 'images/collection_img/nino_img/nino_img11.jpg',
				'details': 'b&w sweater',
				'title': 'Mustache swag kogi church-key, Vice lomo art party',
				'price': '50'
			},
			{
				'image': 'images/collection_img/nino_img/nino_img12.jpg',
				'details': 'red top',
				'title': 'Mustache swag kogi church-key, Vice lomo art party',
				'price': '90'
			},
			{
				'image': 'images/collection_img/nino_img/nino_img13.jpg',
				'details': 'white dress',
				'title': 'Mustache swag kogi church-key, Vice lomo art party',
				'price': '80'
			}
		];
	}]);