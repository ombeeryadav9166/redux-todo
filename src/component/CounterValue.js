import { useSelector } from "react-redux";

const CounterValue = () => {
  const count = useSelector((state)=>state.counter).count || 0;

  return (
    <div>
      <h3>Counter Value : {count}</h3>
    </div>
  );
};
export default CounterValue;
