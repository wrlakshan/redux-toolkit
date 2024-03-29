import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter.js";
import { useEffect } from "react";

function App() {
  const { count } = useSelector((state) => state.counter);
  const state = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <h1>Number Value: {count} </h1>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment 5
        </button>
      </div>
    </>
  );
}

export default App;
