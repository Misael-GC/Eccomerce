import Home from '../Home'
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SingIn from '../SigIn';
import './App.css'


function App() {

  return (
    <>
      <div className='bg-black'>
        <Home />
        <MyAccount/>
        <MyOrder/>
        <MyOrders/>
        <NotFound/>
        <SingIn/>
      </div>
    </>
  )
}

export default App;
