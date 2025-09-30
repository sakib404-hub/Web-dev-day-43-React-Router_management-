import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';
import User from './Components/User/User.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';


// const users = async () => {
//   const url = 'https://jsonplaceholder.typicode.com/users';
//   const res = await fetch(url);
//   return res.json();
// }

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Root> </Root>
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'Mobiles', Component: Mobiles },
      { path: 'Laptops', Component: Laptops },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: User
      },
      {
        path: 'users/:userDetails',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userDetails}`),
        Component: UserDetails
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
