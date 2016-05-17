(function() {
  'use strict';
  angular
  .module('chapter8')
  .factory('Post', function($resource) {
  return $resource('http://angular.codeforges.com/api/wp-json/wp/v2/posts/:id');
  });
})();