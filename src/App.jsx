// src/App.jsx
import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // NEW: State for the current filter ('all', 'active', 'completed')
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // NEW: Function to edit a task
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  // NEW: Filter logic to decide which todos to show
  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // "all"
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Tasks</h1>
        
        <div className="mb-6">
          <TodoForm addTodo={addTodo} />
        </div>

        {/* NEW: Filter Buttons */}
        <div className="flex gap-2 mb-4 justify-center">
          {['all', 'active', 'completed'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-full text-sm capitalize transition ${
                filter === f 
                  ? "bg-purple-600 text-white font-semibold" 
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <TodoList 
          todos={filteredTodos} // Pass the filtered list!
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo}
          editTodo={editTodo} // Pass the edit function down
        />
      </div>
    </div>
  );
}

export default App;