(function() {
  'use strict';

  angular
    .module('chapter8', ['ngResource', 'ngRoute', 'base64'])
    .filter('sanitize', function($sce) { return $sce.trustAsHtml; });

})();
