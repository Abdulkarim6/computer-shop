import { RouterProvider } from 'react-router'
import './App.css'
import routers from './routes/Routers'

function App() {
  
  return (
   <RouterProvider router={routers} ></RouterProvider>
  )
}

export default App
