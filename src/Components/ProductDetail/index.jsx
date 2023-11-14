import { XCircleIcon  } from '@heroicons/react/24/solid'
import './details.css';
import { useContext } from 'react';
import { ShoppingCartContext }  from '../../Context'


function ProductDetail() {
  const context = useContext(ShoppingCartContext);

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-7'>
      <button>
        <XCircleIcon 
        className={`h-5 w-5 text-black cursor-pointer`}
          onClick={()=> context.closeProductDetail()}
        />
      </button>
      </div>
      <figure className='h-3/5 px-6' >
        <img className='w-full h-4/5 rounded-lg' 
        src={context.productToShow.image} 
        alt={context.productToShow.title}/>
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${context.productToShow.price} </span>
        <span className='font-medium text-md text-ellipsis' >${context.productToShow.title } </span>
        <span className='font-light text-sm truncate'>${context.productToShow.description}</span>
      </p>
    </aside>
  );
}

export default ProductDetail;
