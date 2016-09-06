angular.module('todoListApp')
.directive('helloWorld', function() {
	return {
		template: "This is the hello world directive!",
		restrict: "E"
	};
});
// don't use second parameter if want to look for module and not create second 
// "todoListApp"