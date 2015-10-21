var todo=angular.module('todoApp',[]);
todo.controller('todoController',['$scope', function($scope){
	$scope.todos=[{
		'title':'my first task',
		'done':false
	}];

	$scope.addTodo=function(){
		$scope.todos.push({
			'title':$scope.todoItem
		});
		$scope.todoItem='';
	};
	$scope.reset=function(){
		$scope.todos=$scope.todos.filter(function(doneitem){						
			return !doneitem.done;
		});
	};
	$scope.selectAll=function(){
		angular.forEach($scope.todos,function(val){
			val.done = true;
	});
	};
	$scope.unselectAll=function(){
		angular.forEach($scope.todos,function(val){
			val.done = false;
	});
	};
	$scope.remaining  = function(){
		var count=0;
		angular.forEach($scope.todos,function(val){
			count +=val.done?0:1;
	});
		return count;
	};
}]);
