import { createBrowserRouter } from "react-router-dom";
import Landing from "../components/Landing";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);
