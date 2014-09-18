'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'Iphone6',
     'snippet': 'Finally getting a big screen.'},
    {'name': 'Samsung Note 4',
     'snippet': 'The 1st really big phone.'},
    {'name': 'Samsung S5',
     'snippet': 'The smaller Note.'}
  ];
});
