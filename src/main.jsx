import App from './App.jsx'
import './index.css'
import SignupPage from './pages/SignupPage.jsx';
import SigninPage from './pages/signinPage.jsx';

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Signup",
    element: <SignupPage/>,
  },

  {
    path: "/signin",
    element: <SigninPage/>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);