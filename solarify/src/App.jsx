// App.jsx
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Import components
import Navbar from "./components/Navbar.jsx";
 // Fix path if needed
import Main from "./components/Main.jsx";
import Home from "./Pages/Home.jsx";
import Footer from "./Pages/Footer.jsx";

// Layout Component
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },         // shows Home at "/"
      { path: "", element: <Main /> }, // shows Main at "/mainpage"
    ],
  },
]);

// App Entry Point
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
