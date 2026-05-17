import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserMahgment from "./pages/UserMangment";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import Adding from "./components/Adding/Adding";
import Developers from "./pages/DeveloperManger";
import Products from "./pages/ProductManger";

const UserAdd = () => (
  <Adding btn="Add User" lable_name={["Name", "Email", "Role"]} />
);

const DeveloperAdd = () => (
  <Adding
    btn="Add Developer"
    lable_name={["Developer", "Technology", "Experience"]}
  />
);

const ProjectAdd = () => (
  <Adding btn="Add Project" lable_name={["Project Name", "Status", "Team"]} />
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/usermahgment",
        element: <UserMahgment />,
      },
      {
        path: "/usermahgment/add",
        element: <UserAdd />,
      },
      {
        path: "/Developers",
        element: <Developers />,
      },
      {
        path: "/Developers/add",
        element: <DeveloperAdd />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/add",
        element: <ProjectAdd />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
