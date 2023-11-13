import { XCircleIcon  } from '@heroicons/react/24/solid'
import './details.css';
import { useContext } from 'react';
import { ShoppingCartContext }  from '../../Context'


function ProductDetail() {
  const context = useContext(ShoppingCartContext);
  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-7'>
      <h2 className="text-xl font-medium">Product Detail</h2>
      <button>
        <XCircleIcon 
        className={`h-5 w-5 text-black`}
          onClick={()=> context.closeProductDetail()}
        />
      </button>
      </div>
    </aside>
  );
}

export default ProductDetail;
