import { XCircleIcon  } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext }  from '../../Context'
import OrderCard from '../../Components/OrderCard';
import {totalPrice } from '../../utils';
import './styles.css';

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);
  
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () =>{
    const orderToAdd = {
      date: '01.02.2024',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
  }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white z-20`}>
      <div className='flex justify-between items-center p-7'>
      <h2 className='font-medium text-xl'>My Order</h2>
      <button>
        <XCircleIcon 
        className={`h-5 w-5 text-black cursor-pointer`}
          onClick={()=> context.closeCheckoutSideMenu()}
        />
      </button>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
      {
        context.cartProducts.map(product =>(
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))
      }
      </div>
      <div className="px-6 mb-7">
        <p className='flex justify-between items-center mb-2' >
        <span className='font-light'>Total: </span>
        <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        <button className='bg-black py-3 text-white  w-full rounded-lg' onClick={()=> handleCheckout()}>Checkout</button>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
