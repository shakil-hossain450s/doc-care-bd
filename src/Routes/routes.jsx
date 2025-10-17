import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Bookings from "../Pages/Bookings/Bookings";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/", 
    Component: Root,
    children: [
      {index: true, path: "/", Component: Home},
      {path: "/bookings", Component: Bookings},
      {path: "/blogs", Component: Blogs},
      {path: "/contact", Component: Contact}
    ]
  }
]);

export default router;