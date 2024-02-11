import logo from './logo.svg';
//import './App.css';
import Header from './Header';
import Login from './Login';
import { Outlet, Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './Body';
import Contact from './Contact';

function App() {
  const Layout=()=>{
    return(
      <div>
        <Header/>
        <Outlet/>
      </div>
    )
  }

  
  const app_router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Login/>
        },
        {
          path:"/browse",
          element:<Body/>
        },
        {
          path:"/contact",
          element:<Contact/>
        }
      ]
    }
  ])
  return(
    <RouterProvider router={app_router}/>
  )
}

export default App;
