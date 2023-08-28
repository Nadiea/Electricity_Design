import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Initial from "./layout/Initial";
import Home from "./component/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Initial/>,
    children:[


      {
        path:"/",
        element:<Home/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);