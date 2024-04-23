import HomePage from "./Pages/HomePage/HomePage"
import Layout from "./Pages/Layout/Layout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { listData, singlePostData } from "./lib/dummydata";
import ListPage from "./Pages/ListPage/ListPage";
import UploadWidget from "./components/UploadWidget/UploadWidget";
import SingleListingPage from "./Pages/SingleListingPage/SingleListingPage";
import AboutPage from "./Pages/AboutPage/About";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Login from "./Pages/Login/Login";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import ProfileUpdatePage from "./Pages/UpdateProfilePage/UpdateProfilePage";


// Test Pages
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/test",
          element: <UploadWidget/>

        },
        {
          path: "/listings",
          element: <ListPage />
        },
        {
          path: "/property",
          element: <SingleListingPage />
        },
        {
          path: "/aboutus",
          element: <AboutPage />
        },
        {
          path: "/contact",
          element: <ContactPage />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <SignUpPage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        }
      ]
    }
  ]);

  return (<RouterProvider router={router} />)
}


export default App