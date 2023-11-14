import {useContext} from 'react';
import { PlusCircleIcon  } from '@heroicons/react/24/solid'
import { ShoppingCartContext }  from '../../Context'

function Card(data) {
  const context = useContext(ShoppingCartContext);

  const showProduct = (ProductDetail) =>{
    context.openProductDetail();
    context.setProductToShow(ProductDetail);
  }

  return (
    <div
      className='bg-white cursor-pointer mb-32 w-56 h-60 rounded-lg '
      onClick={()=> showProduct(data.data)}
      >
        <figure className='relative mb-2 w-full h-full'>
            <span className='absolute bottom-0 left-0 bg-white/80 rounded-lg text-black text-xs m-2 px-3 py-0.5 '>{data.data?.category}</span>
            <img 
                src={data.data?.image}
                alt={data.data?.description}
                className='w-full h-full object-contain rounded-lg '
            />
            <button className='absolute top-0 right-0 flex justify-center items-center bg-slate-100/90 w-6 h-6 rounded-full m-2 p-1'
            onClick={()=> context.setCount(context.count + 1)}
            >
              <PlusCircleIcon className='w-6 h-6 text-black'/>
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