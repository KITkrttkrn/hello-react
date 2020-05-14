import React, { useState } from "react";
import CounterClassComp from "./CounterClassComp";
import CounterFuncComp from "./CounterFuncComp";
import Exstyle from "./components/style";
import ExImage from "./components/ex_images";
import ExProps from "./components/ex_props";
import ExDestructuring from "./components/destructuring";
import TestuseStateDemo1 from "./components/useStateDemo1";
import TestuseStateDemo2 from "./components/useStateDemo2";
import TestuseEffectDemo1 from "./components/useEffectDemo1";

export default function App() {
  const var2 = "test";
  const var3 = true;
  const [count, setCount] = useState(0);
  const submitHandler = () => {
    alert("Test2");
  };
  return (
    <div style={{ textAlign: "center" }}>
      {/* HI
      <h1>TEST {var2}</h1>
      {var3 ? <h1>YES</h1> : <h1>NO</h1>}
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ADD
      </button>
      <button
        onClick={function () {
          if (count > 0) {
            setCount(count - 1);
          } else {
            setCount(0);
          }
        }}
      >
        REMOVE
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        RESET
      </button>
      <CounterClassComp />
      <CounterFuncComp />
      <Exstyle />
      <ExImage />
      <ExImage image="/logo512.png" height="200" />
      <ExProps count={count} color="#f00" showLabel />
      <ExDestructuring
        usernameHint="Username"
        passwordHint="Password"
        submitHandle={() => alert("Test1")}
      />
      <ExDestructuring
        usernameHint="Username"
        passwordHint="Password"
        submitHandle={submitHandler}
      />
      <TestuseStateDemo1 />
      <TestuseStateDemo2 /> */}
      <TestuseEffectDemo1 />
    </div>
  );
}
