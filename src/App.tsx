import { useRoutes } from "react-router-dom";

import "./App.css";

import RouteList from "./routes";

const App = () => {
  let routes = useRoutes(RouteList);
  return routes;
};

export default App;
