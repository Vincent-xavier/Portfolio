import { createBrowserRouter } from "react-router-dom";
import Landing from "../base/Landing";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);
