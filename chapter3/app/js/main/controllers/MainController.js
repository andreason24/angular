App.controller('MainController',function($scope, toaster) {
  $scope.pop = function(){
      toaster.pop('success', "title", "text");
  };

  $scope.people = [];
  
  $scope.add = function(person, valid){
    
    if (valid) {
  	$scope.people.push(person); 
  	toaster.pop('success', person.first_name+" "+person.last_name, "was added");
    }

  }

  $scope.remove = function(i){

  	$scope.people.splice(i, 1);
  	toaster.pop('error', "", "deleted");

  }


});