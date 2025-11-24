import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Myaccount from "./pages/Myaccount.jsx";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Announcement from "./components/Announcement.jsx";
import Product from "./pages/Product.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProductList from "./pages/ProductList.jsx";
import Order from "./pages/Order.jsx";

// ✅ Layout component — acts as the shared frame for all pages
function Layout() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Outlet />{" "}
      {/* 👈 This is where child routes (Home, Cart, Myaccount) appear */}
      <Footer />
    </div>
  );
}

// ✅ Main App component
const App = () => {
  // Create router configuration
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
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/create-account",
          element: <Register />,
        },
        {
          path: "/myaccount",
          element: <Myaccount />,
        },
        {
          path: "/products/:searchterm",
          element: <ProductList />,
        },
        {
          path: "/myorders",
          element: <Order />,
        },
      ],
    },
  ]);

  // Provide the router to the app
  return <RouterProvider router={router} />;
};

export default App;
