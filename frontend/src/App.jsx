import HomePage from "./Pages/HomePage/HomePage"
import Layout from "./Pages/Layout/Layout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { listData } from "./lib/dummydata";
import Card from "./components/Card/Card";


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
        }
      ]
    }
  ]);

  return (<RouterProvider router={router} />)
}

// // Test Components
// function App(){
//  var listing =  {
//     id: 3,
//     title: "A New Apartment in the City!",
//     images: ["https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
//     bedroom: 1,
//     bathroom: 1,
//     price: 800,
//     address: "101 Baker Street, London",
//     latitude: 53.4808,
//     longitude: -2.2426,
//     type: "Rent"
//   }
//   console.log(listing)
//   return (
//     <>
//       <Card item={listData[0]}/>
//       <Card item={listData[2]}/>
//       <Card item={listData[3]}/>
//     </>

//   )
// }


export default App