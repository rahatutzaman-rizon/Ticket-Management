import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
          path: "/",
      element: <Dashboard></Dashboard>,
        }
      ]
    },
  ]);


  export default router;
