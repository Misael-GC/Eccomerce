import { XCircleIcon  } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext }  from '../../Context'
import OrderCard from '../../Components/OrderCard';
import './styles.css';


function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);
  console.log(':0', context.cartProducts)

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
      <div className='px-6'>
      {
        context.cartProducts.map(product =>(
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
          />
        ))
      }
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
