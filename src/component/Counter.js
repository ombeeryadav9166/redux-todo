import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCounter } from '../store/action/counter';
import CounterValue from './CounterValue';

const Counter = () => {
  const count = useSelector((state) => state.counter).count || 0;
  const dispach = useDispatch();
  const [value, setValue] = useState(count);

  useEffect(() => {
    dispach(updateCounter(value));
  }, [value]);
  return (
    <div>
      <h3>Counter Show</h3>
      <div
        className="btn-group btn-group-lg"
        role="group"
        aria-label="Large button group"
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            setValue((pre) => pre - 1);
          }}
        >
          -
        </button>
        <input type="number" value={value} />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            setValue((pre) => pre + 1);
          }}
        >
          +
        </button>
      </div>
      <CounterValue />
    </div>
  );
};
export default Counter;
