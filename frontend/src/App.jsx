import HomePage from "./Pages/HomePage/HomePage"
import Layout from "./Pages/Layout/Layout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { listData } from "./lib/dummydata";
import Map from "./components/Map/Map";
import ListPage from "./Pages/ListPage/ListPage";


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
          element: <Map items={listData}/>

        },
        {
          path: "/listings",
          element: <ListPage />
        }
      ]
    }
  ]);

  return (<RouterProvider router={router} />)
}


export default App