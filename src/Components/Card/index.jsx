import {useContext} from 'react';
import { PlusCircleIcon  } from '@heroicons/react/24/solid'
import { ShoppingCartContext }  from '../../Context'
//import { CiSquarePlus } from "react-icons/ci";

function Card(data) {
  const context = useContext(ShoppingCartContext);

  const showProduct = (ProductDetail) =>{
    context.openProductDetail();
    context.setProductToShow(ProductDetail);
    context.closeCheckoutSideMenu()
  }

  const addProductsToCart = (event, productData) =>{
    event.stopPropagation();
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
    console.log(':0', context.cartProducts)
  }

  return (
    <div
      className='bg-white cursor-pointer mb-32 w-56 h-60 rounded-lg '
      onClick={()=> showProduct(data.data)}
      >
        <figure className='relative mb-2 w-full h-full'>
            <span className='absolute bottom-0 left-0 bg-gray-100 rounded-lg text-black text-xs m-2 px-3 py-0.5 z-10'>{data.data?.category}</span>
            <img 
                src={data.data?.image}
                alt={data.data?.description}
                className='w-full h-full object-contain rounded-lg '
            />
            <button className='absolute top-0 right-0 flex justify-center items-center bg-slate-100/90 w-7 h-7 rounded-full m-2 p-1'
            onClick={(event) => addProductsToCart(event, data.data)}
            >
              <PlusCircleIcon className='w-6 h-6 text-black'/>
              {/* <CiSquarePlus className='w-7 h7' /> */}
            </button>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light truncate'>{data.data?.title}</span>
            <span className='text-lg font-medium'>${data.data?.price}</span>
        </p>
    </div>
  )
}

export default Card;