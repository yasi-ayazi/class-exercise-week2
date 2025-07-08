import { useCounter, useCounterDispatch } from './CounterContext';

function CounterBox() {
  const count = useCounter();
  const dispatch = useCounterDispatch();

  return (
    <div className="box">
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

export default CounterBox;
