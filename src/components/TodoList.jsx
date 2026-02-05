// src/components/TodoList.jsx
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-400 text-lg">No tasks found.</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo}
          editTodo={editTodo} // Pass it here
        />
      ))}
    </ul>
  );
}

export default TodoList;