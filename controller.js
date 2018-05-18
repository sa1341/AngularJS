/**
 *  서비스를 이용하여 컨트롤러의 가독성을 높일수 있다.
 *  todoStorage라는 서비스를 컨트롤러에 의존성 주입을하여 
 *  storage객체를 리턴하여 서비스 메소드를 호출한다.
 *  
 */
angular.module('todo').controller('TodoCtrl', function($scope, todoStorage){
	
	$scope.todos  = todoStorage.get();
	

	$scope.remove =function(todo){
	//find todo index in todos
		todoStorage.remove(todo);
	
	};
	
	//create new todo
	//push in todos
	$scope.add = function(newTodoTitle){
		
		todoStorage.add(newTodoTitle);
		
		$scope.newTodoTitle="";
	};
	
	$scope.update = function(){
		
		alert("성공!!");
		
		todoStorage.update();
	};
	
	
});
