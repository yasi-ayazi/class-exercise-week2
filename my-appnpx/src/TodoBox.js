import { useTodos, useTodoDispatch } from './TodoContext';
import { useState } from 'react';

function TodoBox() {
  const todos = useTodos();
  const dispatch = useTodoDispatch();
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD', payload: text });
      setText('');
    }
  };

  return (
    <div className="box">
      <h2>Todo List</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New todo"
        className="todo-input"
      />
      <button onClick={handleAdd}>Add</button>
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '0.5rem' }}>
            <span
              onClick={() => dispatch({ type: 'TOGGLE', payload: todo.id })}
              style={{
                textDecoration: todo.done ? 'line-through' : 'none',
                cursor: 'pointer',
                marginRight: '1rem',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'REMOVE', payload: todo.id })}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoBox;
