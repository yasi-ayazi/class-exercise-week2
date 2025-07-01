import { createContext, useContext, useReducer } from 'react';

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.payload);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export const useTodos = () => useContext(TodoContext);
export const useTodoDispatch = () => useContext(TodoDispatchContext);
