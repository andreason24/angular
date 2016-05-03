App.controller('LoginController',function($scope, $http, $location, $filter, $routeParams, $base64, AuthService){

  $scope.user = AuthService.currentUser();

  $scope.login = function (){

	$http({
        	method: "GET",
        	url: 'http://angular.codeforges.com/api/wp-json/wp/v2/users/me?_envelope',
      		headers: {
      		  Authorization: 'Basic ' + $base64.encode( $scope.userName + ':' + $scope.password )
    		}
      })
	  .then(function (response, status){
	  	if (response.data.status == 302) {
          AuthService.login(response.data.body)
          $location.path( "/" );
	  	}
   	  });
}
});