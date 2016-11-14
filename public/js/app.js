angular.module('food', [
  "food.home",
  "food.services",
  // Other modules that will provide controllers and services.
  
   // Angular plugin that provides $routeProvider and the $routeChangeStart event.
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
    authenticate: true,
  })
  .otherwise({
    redirectTo: '/home'
  });

  // There is no need to set up a $httpInterceptor since sessions are passed
  // as cookies and are automatically added to requests by the browser,
  // to be parsed by the server.
})
// .run(function ($rootScope, $location, Auth) {
//   // Check whether the user is authenticated to navigate to a route or not on every
//   // route change.
//   $rootScope.$on('$routeChangeStart', function (event, next, prev) {
//     // If the route requires authentication and the user is sauthenticated...
//     if (!Auth.isAuth() && next.$$route && next.$$route.authenticate) {
//       // Stop any defaults (such as page refreshes on form submissions)
//       event.preventDefault();
//       $location.path('/login');
//     }
//   });
// });
