// App.jsx
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Import components
import Navbar from "./components/Navbar.jsx";
import CompletePage from "./Pages/CompletePage.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Footer from "./components/Footer.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Project from "./Pages/Project.jsx";
import BlogDetail from "./components/blog/BlogDetail.jsx";
import ProjectDetail from "./Pages/ProjectDetail.jsx";
import PrivacyTerms from "./components/PrivacyTerms.jsx";
import TermsConditions from "./components/TermsConditions.jsx";
import PageNotFound from "./components/PageNotFound.jsx";


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
      { path: "/blogdetail/:id", element: <BlogDetail /> },
      { path: "/blogdetail/", element: <BlogDetail /> },
      { path: "/project", element: <Project /> },
      {path:"/projectDetail",element:<ProjectDetail/>},
      {path:"/privacyterms",element:<PrivacyTerms/>},
      {path:"/termsconditions",element:<TermsConditions/>},
      {path:"/pagenotfound",element:<PageNotFound/>},
    ],
  },
]);

// App Entry Point
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
