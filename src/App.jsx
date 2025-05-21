// App.jsx
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Import components
import Navbar from "./components/Navbar.jsx";
import CompletePage from "./Pages/CompletePage.jsx";;
import About from "./Pages/About.jsx";
import Footer from "./components/Footer.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Project from "./Pages/Project.jsx";
import BlogDetail from "./components/blog/BlogDetail.jsx";
import ProjectDetail from "./Pages/ProjectDetail.jsx";
<<<<<<< HEAD
import Inititative from "./components/ProjectDetail/Inititative.jsx";
=======
import PrivacyTerms from "./components/PrivacyTerms.jsx";
import TermsConditions from "./components/TermsConditions.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import Contact from "./Pages/Contact.jsx";
import Faq from "./components/Faq.jsx";
>>>>>>> 0f5fa4b1b92cad0de294c99ea3dd0070a6bf87b9

import Services from "./Pages/Services.jsx";

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
<<<<<<< HEAD
      { path: "/project", element: <Project /> },
      {path:"/projectDetail/:id",element:<ProjectDetail/>},
      { path:"/initiative/:id", element:<Inititative/>}

=======
      { path: "/blogdetail/", element: <BlogDetail /> },
      { path: "/project", element: <Project /> },
      {path:"/projectDetail",element:<ProjectDetail/>},
      {path:"/privacyterms",element:<PrivacyTerms/>},
      {path:"/termsconditions",element:<TermsConditions/>},
      { path: "/services", element: <Services/> },
      {path:"/faq",element:<Faq/>},
      {path:"/contact",element:<Contact/>},
      {path:"/pagenotfound",element:<PageNotFound/>},
>>>>>>> 0f5fa4b1b92cad0de294c99ea3dd0070a6bf87b9
    ],
  },
]);

// App Entry Point
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
