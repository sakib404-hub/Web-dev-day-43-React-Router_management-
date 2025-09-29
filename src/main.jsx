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
import User2 from './Components/User2/User2.jsx';


const users = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const res = await fetch(url);
  return res.json();
}


const user2Promise = users();

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
        path: 'user2',
        element: <Suspense>
          <User2 user2Promise={user2Promise}></User2>
        </Suspense>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
