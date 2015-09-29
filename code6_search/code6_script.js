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
We are using http also. Hence we add $http as a dependency.
    */

  function MainController($scope, $http) {
    $scope.message = "Hello Angular";
    $scope.username = "eternaldainseif";
    
/*
When the user clicks the search button, a function is executed, which we have named as search.
Search function takes a parameter (username) as input
The reason for this parameter is: we have to show the output for the username input in the searchbox
Hence we define the search function inside the controller 
*/
    $scope.search = function(username) {

/*
Inside the search function, we use get method to get data from GITHUB about a user 
and send the response to the HTML. We need to define get inside search
 because search will tell get about the username.
 please note the username is passed from the search function.
*/

      $http.get("https://api.github.com/users/" + username)
        .success(function(response) {
          
/*Then we define a variable info, and attach it to scope
the response from get is stored in the variable info
info contains the response that is returned from GITHUB (remember the output in the URL)
info can be accessed from HTML file to display the data
Keep in mind scope is the glue between HTML and JS file
So anything attached to scope can be accessed from HTML
*/
          $scope.info = response;
        });
    };

  };

}());