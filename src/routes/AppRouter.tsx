
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLayout from "../layouts/UserLayout"
import LandingPage from "../pages/LandingPage";
import Error from "../services/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
 
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
