import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as landingLoader } from "./pages/Home";
import { action as newsletterAction } from "../src/pages/Newsletter";

import {
  About,
  HomeLayout,
  Home,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages/Easy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,

    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },

      {
        path: "Cocktail/:id",
        element: <Cocktail />,
        errorElement: <SinglePageError />,
      },

      {
        path: "NewsLetter",
        action: newsletterAction,
        errorElement: <SinglePageError />,
        element: <Newsletter />,
      },

      {
        path: "about",
        errorElement: <SinglePageError />,
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
