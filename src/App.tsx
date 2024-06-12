import { useState } from "react";
import "./App.css";
import Primary from "./sections/PrimarySection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Primary />
      </main>
    </>
  );
}

export default App;
