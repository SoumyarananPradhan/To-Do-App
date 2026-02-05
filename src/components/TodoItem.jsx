// src/components/TodoItem.jsx
import { useState } from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 group hover:bg-white hover:shadow-sm transition">
      <div className="flex items-center gap-3 flex-1">
        <input 
          type="checkbox" 
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500 cursor-pointer"
        />
        
        {/* Toggle between Input and Text */}
        {isEditing ? (
          <input 
            type="text" 
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 px-2 py-1 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            autoFocus
          />
        ) : (
          <span className={`flex-1 ${todo.completed ? "line-through text-gray-400" : "text-gray-700"}`}>
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-2 ml-2">
        {isEditing ? (
          // Save Button
          <button 
            onClick={handleSave}
            className="text-green-600 hover:text-green-700 text-sm font-semibold"
          >
            Save
          </button>
        ) : (
          // Edit Button
          <button 
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700 text-sm opacity-0 group-hover:opacity-100 transition"
          >
            Edit
          </button>
        )}

        <button 
          onClick={() => deleteTodo(todo.id)}
          className="text-gray-400 hover:text-red-500 text-sm opacity-0 group-hover:opacity-100 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;