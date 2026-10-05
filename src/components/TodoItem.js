import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <div className="todo-content">
        <p className="todo-text">{todo.text}</p>
        <span className="todo-time">{todo.createdAt}</span>
      </div>
      <button
        className="todo-delete"
        onClick={() => onDelete(todo.id)}
        title="Delete todo"
      >
        ✕
      </button>
    </div>
  );
}

export default TodoItem;
