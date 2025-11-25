import Products from "../../Frontend/src/components/Product.jsx";
import User from "./pages/User.jsx";
import Menu from "./components/Menu.jsx";
import Home from "./pages/Home.jsx";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

// ✅ Layout component — acts as the shared frame for all pages
function Layout() {
  return (
    <div className="flex">
      <div>
        <Menu />
      </div>

      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

// ✅ Main App component
const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users",
          element: <User />,
        }
      ]
    },
  ]);

  // Provide the router to the app
  return (
     <RouterProvider router={router} />
  )
};

export default App;
