var App = angular.module('myApp',['ngRoute', 'ngResource']);
App.filter('sanitize', function($sce) { return $sce.trustAsHtml; });