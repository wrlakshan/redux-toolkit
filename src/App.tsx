import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter.js";
import { useEffect, useRef } from "react";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import owl from "./assets/owl.json";

function App() {
  const { count } = useSelector((state) => state.counter);
  const state = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
  }, [state]);

  const style = {
    height: 400,
  };

  const owlRef = useRef<LottieRefCurrentProps>(null);

  return (
    <>
      <div>
        <Lottie
          animationData={owl}
          lottieRef={owlRef}
          style={style}
          loop={true}
          onComplete={() => {
            owlRef.current?.setDirection(-1);
            owlRef.current?.play();
          }}
        />
      </div>
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
