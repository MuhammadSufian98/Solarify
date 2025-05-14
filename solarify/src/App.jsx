// App.jsx
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Import components
import Navbar from "./Pages/Navbar.jsx";
// Fix path if needed
import CompletePage from "./Pages/CompletePage.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Footer from "./components/Footer.jsx";

// Layout Component
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> }, // shows Home at "/"
      { path: "/mainpage", element: <CompletePage /> }, // shows Main at "/mainpage"
      {path:"/about",element:<About/>}
    ],
  },
]);

// App Entry Point
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
