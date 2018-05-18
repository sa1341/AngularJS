// directive를 정의할땐 관습적으로 카멜케이스를 적용한다.

angular.module('todo').directive('todoTitle', function(){
	return {
		template: '<h1>todo 목록 </h1>'  //directive 설정객체를 정의한다. template는 directive의 설정 property이다.
	};
});

angular.module('todo').directive('todoItem', function(){
	
	return {
		templateUrl: 'todoItem.tpl.html' // 템플릿이 길어지면 templateUrl를 이용하여 별도의 템플릿파일을 분리해서 사용할수있다.
	};
	
});

angular.module('todo').directive('todoFilters', function(){
	
	return{
		templateUrl: 'todoFilters.tpl.html'
	};
	
});

angular.module('todo').directive('todoForm', function(){
	
	return{
		templateUrl: 'todoForm.tpl.html'
	};
	
});