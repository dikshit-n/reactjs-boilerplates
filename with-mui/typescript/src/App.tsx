// import { useEffect } from "react";
// import { createEventEmitters } from "@/utils";

import { useRoutes } from "react-router-dom";
import { routeDefinition } from "./routes";

function App() {
  const content = useRoutes(routeDefinition);

  // useEffect(() => {
  //   createEventEmitters();
  // }, []);

  return content;
}

export default App;
