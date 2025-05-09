import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './Home.jsx'
import Shop from './Shop.jsx'
import Cart from './Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "home", element: <Home />},
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
  
  

  
    ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
