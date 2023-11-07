import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SingIn from '../SigIn';
import NotFound from '../NotFound';
import Navbar from '../../Components/Navbar';
import './App.css'

const AppRoutes = ()=>{
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/myaccount', element: <MyAccount />},
    { path: '/myorder/:id?', element: <MyOrder/>},
    { path: '/myorders', element: <MyOrders/>},
    { path: '/signin', element: <SingIn/>},
    { path: '/*', element: <NotFound />}
  ])
  return routes
}

function App() {

  return (
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>
  )
}

export default App;
