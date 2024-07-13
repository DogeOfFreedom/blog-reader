import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./SignUp";
import Login from "./Login";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Signup",
    element: <SignUp />,
  },
  { path: "/Login", element: <Login /> },
]);

export default router;
