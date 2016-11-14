angular.module('food.services', [])

// Tasks will get and post tasks to the server
// Think of factories as the "model" layer on the front end.
.factory('Tasks', function ($http) {
  // var getAll = function () {
  //   // Returning a Promise returned by $http
  //   return $http({
  //     method: 'GET',
  //     url: '/api/tasks'
  //   });
  // };

  var getRating = function (task) {
    console.log('services', task)
    return $http({
      method: 'POST',
      url: '/api/food',
      data: task
    })        

    .catch(function (err){
      console.log('getRating error: ', err);
    });    
  };

  // Factories are allowed to return any values and
  // are NOT pseudoclassically instantiated by Angular.
  // This object provides an interface to be used by controllers.
  return {
    // getAll: getAll,
    getRating: getRating
  };
})