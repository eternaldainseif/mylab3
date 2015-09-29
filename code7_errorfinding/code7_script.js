/* Script file contains one or more function. 
Code that is executed when you click the search box
Controller Function
*/

/* First you need to initialise the module with the modulename. 
   Remember the module name we used in ng-app in the HTML file.
   You have to use the same module name.
   Then you have to declare the controller. You can use any name for the controller
*/


(function() {
  angular
    .module("appName", []) // create module
    .controller("MainController", MainController); // register controller

  
/* Now we have do define the controller function to do something (some work) and pass the scope
Scope is a parameter for the function. It is denoted using $scope. 
Scope is basically a glue between the HTML file and Script.js, a way to send data to HTML for display
We have to pass another parameter $http, because we are using http to get data from external source 

    */

  function MainController($scope, $http) {

    $scope.message = "Hello Angular";
   
/*When the user clicks the search button, a function is executed, which we have named as search.
Search function takes a parameter (username) as input
The reason for this parameter is: we have to show the output for the username input by the user
Hence we define the search function inside controller first
*/

    $scope.search = function(username) {

      /*
Inside the search function, we use get method to get the URL containing information about repositories
info contains the response that is returned from GITHUB (remember the output in the URL)
      */

      $http.get("https://api.github.com/users/" + username)
        .success(function(response) {
          $scope.info = response;

 /*
We need to have another get method to access the URL containing all the information about repositories
$scope.info.repos_url - is the URL containing all information and passed to the get method
the response1 is stored in repos
repos contains all teh details about all the repositories of the user
      */

                $http.get($scope.info.repos_url)
                  .success(function(response1) {
                        $scope.repos = response1;
                        
            });
        });
    };

  };

}());