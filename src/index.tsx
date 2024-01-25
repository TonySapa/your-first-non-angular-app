import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import AppRoot from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Details from './components/Details'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
  },
  {
    path: "details/:id",
    element: <Details />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
