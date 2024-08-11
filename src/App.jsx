import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing.jsx";
import { loader as cocktailLoader } from "./pages/Cocktail.jsx";
import { action as newsletterAction } from "./pages/Newsletter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: cocktailLoader,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        errorElement: <SinglePageError />,
        action: newsletterAction,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
