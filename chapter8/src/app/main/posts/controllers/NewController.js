(function() {
  'use strict';

  angular
  .module('chapter8')
  .controller('NewController', NewController);

  /** @ngInject */
  function NewController ($scope, Post, $routeParams, $location, AuthService){
  
 $scope.user = AuthService.currentUser();
  
 $scope.save = function() {
    Post.save({title: $scope.title, content: $scope.content, status: 'publish'}, function(){
      $location.path("/");
    });
  }
}

})();