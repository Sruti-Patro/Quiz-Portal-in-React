import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 500);
    // const intervalId = setInterval(() => {
    //   setTime(new Date());
    // }, 1000);
    // console.log(intervalId);
    // return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <p>{time.toLocaleString()}</p>
    </>
  );
}

export default App;
