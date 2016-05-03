App.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({enabled: true, requireBase : false});

  $routeProvider
  .when('/', {
    templateUrl: '/js/posts/partials/index.html',
    controller: 'IndexController'
  })
  .when('/posts/:id', {
    templateUrl: '/js/posts/partials/show.html',
    controller: 'ShowController'
  })
  .when('/login', {
    templateUrl: '/js/login/partials/login.html',
    controller: 'LoginController'
  })
  .when('/logout', {
    templateUrl: '/js/login/partials/login.html',
    controller: 'LoginController',
    resolve: {
      logout: function($location, AuthService){
        AuthService.logout();
        $location.path("/login");
      }
    }
  })
  .otherwise('/');

}).
  run(function($rootScope, $location, AuthService) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      AuthService.fetchUser();
      if (!AuthService.isLoggedIn()) 
        $location.path("/login");
    });
  });
