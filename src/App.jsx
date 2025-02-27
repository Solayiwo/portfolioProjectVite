import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Home,
  HomeLayOut,
  Projects,
} from "./pages";
import "./App.css";
// import "../src/assets/style/App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "projects",
        element: <Projects />,
      },

      {
        path: "experience",
        element: <Experience />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
