App.controller('LoginController',function($scope, $resource, $http, $location, $filter, $routeParams, $base64, AuthService){
  var User = $resource('http://angular.codeforges.com/api/wp-json/wp/v2/users/:id');

  $scope.user = AuthService.currentUser();
  $scope.users = User.query();

  $scope.login = function (){
	var guest = $filter('filter')($scope.users, {name: $scope.userName})[0];

	if (guest) {
		$http({
	        	method: "POST",
	        	url: 'http://angular.codeforges.com/api/wp-json/wp/v2/users/'+ guest.id,
	      		headers: {
          		  Authorization: 'Basic ' + $base64.encode( $scope.userName + ':' + $scope.password )
        		}
	      })
		  .then(function (response, status){
	          AuthService.login(response.data)
	          $location.path( "/" );
	   	  });
  	}
  }
});