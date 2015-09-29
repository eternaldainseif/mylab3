// Script file contains one or more function. The basic idea is to do data maipulation here

(function() {

/* First you need to initialise the module with the modulename. 
   Remember the module name we used in ng-app in the HTML file.
   You have to use the same module name.
   Then you have to declare the controller. You can use any name for the controller
*/

        angular
        .module("appName", [])
        .controller("MainController", MainController);

/* Now we have do define the controller function to do something (some work) and pass the scope
Scope is a parameter for the function. It is denoted using $scope. 
Scope is basically a glue between the HTML file and Script.js, a way to send data to HTML for display
We are using http also. Hence we add $http as a dependency.


    */

    function MainController($scope, $http) {
              $scope.message = "Hello Angular";
       
//Here http get is used to get data from GITHUB about a user 
        $http.get("https://api.github.com/users/hridds")
        .success(function(response) 

/*Then we define a variable info, and attach it to scope
the response from get is stored in the variable info
info contains the response that is returned from GITHUB (remember the output in the URL)
info can be accessed from HTML file to display the data
Keep in mind scope is the glue between HTML and JS file
So anything attached to scope can be accessed from HTML
*/
                  {$scope.info = response;});
          };

})();     
    
               

