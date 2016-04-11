App.controller('ShowController',function($scope, $resource, $routeParams){
  var Post = $resource('http://angular.codeforges.com/api/wp-json/wp/v2/posts/:id');
  $scope.post = Post.get({id: $routeParams.id});
});