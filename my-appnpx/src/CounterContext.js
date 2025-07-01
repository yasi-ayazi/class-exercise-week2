import { createContext, useContext, useReducer } from 'react';

const CounterContext = createContext();
const CounterDispatchContext = createContext();

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

export function CounterProvider({ children }) {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <CounterContext.Provider value={count}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
}

export const useCounter = () => useContext(CounterContext);
export const useCounterDispatch = () => useContext(CounterDispatchContext);
