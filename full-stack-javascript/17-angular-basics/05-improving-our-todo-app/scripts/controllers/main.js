'use strict';

// don't use second parameter because we are using the 
// todolistapp; using a second parameter would create a module called todolistapp
// thus, this code attaches a new controller to an existing module.
angular.module('todoListApp') 
.controller('mainCtrl', function($scope, dataService) {

	$scope.helloConsole = dataService.helloConsole;

	$scope.addTodo = function() {
    var todo = {"name": "This is a new todo."};
    $scope.todos.unshift(todo);
  };

	dataService.getTodos(function(response) {
    console.log(response.data);
    $scope.todos = response.data;
  });

  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };

  $scope.saveTodo = function(todo) {
    dataService.saveTodo(todo);
  };

});