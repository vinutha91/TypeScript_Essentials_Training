var TodoStates;
(function (TodoStates) {
    TodoStates[TodoStates["NEW"] = 1] = "NEW";
    TodoStates[TodoStates["ACTIVE"] = 2] = "ACTIVE";
    TodoStates[TodoStates["COMPLETED"] = 3] = "COMPLETED";
    TodoStates[TodoStates["DELETED"] = 4] = "DELETED";
})(TodoStates || (TodoStates = {}));
class TodoService {
    addTodo() {
        alert('Hiiii');
    }
    deleteTodo(todo) {
        return todo;
    }
    changeTodoState(todo, state) {
        return true;
    }
    getAll() {
        return [];
    }
}
var todoService = new TodoService();
//# sourceMappingURL=index.js.map