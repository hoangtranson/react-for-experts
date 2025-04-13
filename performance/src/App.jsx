import { useState, useRef, useEffect } from "react";
import "./App.css";

export function Rerenderable(props) {
  const isFirst = useRef(true);

  console.log('Rerenderable ==>', props.origin);

  useEffect(() => {
    isFirst.current = false;
  }, []);

  const style = { color: isFirst.current ? "red" : "blue" };
  const text = isFirst.current ? "First render" : "Not first render";

  return <p style={style}>{text}</p>;
}

function RerenderWithoutPropsChange() {
  const [, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Click to re-render</button>
      <Rerenderable origin={'RerenderWithoutPropsChange'} />
    </div>
  );
}

function NoRerenderWithPropsChange() {
  const count = useRef(0);
  return (
    <div>
      <button onClick={() => count.current++}>Click to re-render</button>
      <Rerenderable count={count.current} origin={'NoRerenderWithPropsChange'}/>
    </div>
  );
}

function App() {

  return (
    <>
      <main>
        <h4>Re-renders without changing properties</h4>
        <RerenderWithoutPropsChange />
        <h4>No re-render with changing properties</h4>
        <NoRerenderWithPropsChange />
      </main>
    </>
  );
}

export default App;
