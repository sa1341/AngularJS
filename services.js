
/*데이터를 관리하는 기능과 뷰를 관리하는기능을 나누었다. 
 * 서비스를 생성하는 메소드는 총 3가지이다.
 * service, factory, provider가 있지만, 셋다 결과는 똑같다. 다만 서비스를 정의하는 방법들이 다르다.
 * JavaScript에서는 결과값의 자료형을 명시하지않고 원하는 값을 리턴 할 수있다.
 *
 */

angular.module('todo').factory('todoStorage', function(){
	var TODO_DATA = 'TODO_DATA';
	
	var storage = {
	
			todos:[],
			
			//_로시작하는 변수나 함수는 컨트롤러에서 사용할수 없도록 내부적으로 감추어진 함수  로컬스토리지는 입력값을 무조건 String으로 받는다.
			_saveToLocalStorage:function(data){
				localStorage.setItem(TODO_DATA, JSON.stringify(data))
			},
			
			_getFromLocalStorage:function(){
				return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
			},
			
			get:function(){
				angular.copy(storage._getFromLocalStorage(), storage.todos);
				return storage.todos;
			},
			
			remove: function(todo){
				var idx =storage.todos.findIndex(function(item){
					return item.id === todo.id;
				});
					//remove from todos
				if(idx > -1){
					storage.todos.splice(idx, 1);
					storage._saveToLocalStorage(storage.todos);		
				}	
			},
			
			add:function(newTodoTitle){
				var newTodo = {
						title: newTodoTitle,
						completed:false,
						createdAt:Date.now()
				};
				
				storage.todos.push(newTodo);
				storage._saveToLocalStorage(storage.todos);		
			},
			
			update:function(){
				storage._saveToLocalStorage(storage.todos);	
			}
		
	}
	
	return storage;
});


