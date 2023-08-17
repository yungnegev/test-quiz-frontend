import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import { Paths } from './lib/paths'
import Test from './pages/Test'
import Result from './pages/Result'

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Home />
  },
  {
    path: Paths.test,
    element: <Test/>
  },
  {
    path: Paths.result,
    element: <Result />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
