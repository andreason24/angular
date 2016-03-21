App.controller('MainController',function($scope, $http, toaster){


  $scope.users = [];

  $http({
    method: 'GET',
    url: 'http://angular.codeforges.com/'
  }).then(function successCallback(response) {
  	   console.log(response);
   	   $scope.users = response.data;
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

  $scope.remove = function(i){

  	$scope.users.splice(i, 1);
  	toaster.pop('error', "", "deleted");

  }

  $scope.sendData = function(user) {

    $http({
        url: 'http://angular.codeforges.com/',
        method: "POST",
        data: {
        	firstName: $scope.firstName,
        	lastName: $scope.lastName,
        	userName: $scope.userName
        }
            })
    .then(function(response) {
    		$scope.users.push(response.data.response);
    		toaster.pop('success', "", "User was added successfully");
    }, 
    function(response) { // optional
         console.log("fail"); 
    });
}

})
