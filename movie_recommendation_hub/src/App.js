import logo from './logo.svg';
//import './App.css';
import Header from './Header';
import Login from './Login';
import { Outlet, Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './Body';
import Contact from './Contact';
import { Provider } from 'react-redux';
import store from './utils/store.js';
import Wishlist from './Wishlist.js';

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
        },
        {
          path:'/wishlist',
          element:<Wishlist/>
        }
      ]
    }
  ])
  return(
    <Provider store={store}>
    <RouterProvider router={app_router}/>
    </Provider>
  )
}

export default App;
