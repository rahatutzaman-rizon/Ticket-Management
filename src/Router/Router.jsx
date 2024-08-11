import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Pages/Dashboard";
import Contacts from "../Pages/Contacts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
          path: "/",
      element: <Dashboard></Dashboard>,
        },
        {
          path:"/contacts",
          element:<Contacts></Contacts>,
        },
      ]
    },
  ]);


  export default router;
