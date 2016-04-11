App.controller('IndexController',function($scope, $resource){
  var Post = $resource('http://angular.codeforges.com/api/wp-json/wp/v2/posts');
  $scope.posts = Post.query();
});