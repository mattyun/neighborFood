angular.module('food.home', [])

.controller('HomeController', function ($scope, Tasks) {
  $scope.data = {};
  $scope.rating = '';
  $scope.comment = '';

  $scope.sendAddress = function(){
    Tasks.getRating($scope.data)
    .then(function(res){
      
      //Make an array of categories
      var categories = []; 
      var thai = false;
      


      res.data.businesses.forEach(function(b){        
        categories.push(b.categories);
      })

      var flattened = categories.reduce(function(a,b){
        return a.concat(b);
      }).reduce(function(c,d){
        return c.concat(d);
      })

      //search for Thai within categories
      
      flattened.forEach(function(cat){        
        if(cat == "thai"){          
          thai = true;
        }
      })

      // console.log('average',
      //   res.data.businesses.reduce(function(result,curr){
      //     return (result+curr.rating)/2;
      //   },0)
      // )

      var avg = res.data.businesses.reduce(function(result,curr){
          return (result+curr.rating)/2;
        },0).toFixed(2);

      $scope.rating = avg + '/5'

      if(!thai){
        $scope.comment = 'Warning: No Thai!'  
      } else if(avg > 4 && thai === true){        
        $scope.comment = 'Move here immediately!'  
      } else if(avg > 3.5){        
        $scope.comment = 'Great neighborhood!'  
      } else if(avg > 3){
        $scope.comment = 'You can do better'  
      } else if(avg < 3){
        $scope.comment = 'Do not move here!'  
      }              

    })
  }


});
