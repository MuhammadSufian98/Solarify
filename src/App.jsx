// App.jsx
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Import components
import Navbar from "./components/Navbar.jsx";
import CompletePage from "./Pages/CompletePage.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Footer from "./components/Footer.jsx";
import Blogs from "./Pages/Blogs.jsx";
import BlogDetail from "./components/blog/BlogDetail.jsx";
import Project from "./Pages/Project.jsx";

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
      { path: "/", element: <CompletePage /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blogs /> },
      { path: "/project", element: <Project /> },
      { path: "/blogdetail/:id", element: <BlogDetail /> },
    ],
  },
]);

// App Entry Point
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
