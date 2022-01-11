import { useEffect } from "react";
import { createEventEmitters } from "@/utils";

function App() {
  useEffect(() => {
    createEventEmitters();
  }, []);

  return <div className="App">Hello world</div>;
}

export default App;
