import React, { useCallback, useState } from 'react';

export default function CounterWindow() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrementCount = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <>
      <p style={{ textAlign: 'center' }}>Current count: {count}</p>
      <div className="field-row" style={{ justifyContent: 'center' }}>
        <button type="button" onClick={incrementCount}>
          +
        </button>
        <button type="button" onClick={decrementCount}>
          -
        </button>
        <button type="button" onClick={resetCount}>
          Reset
        </button>
      </div>
    </>
  );
}
