import { XCircleIcon  } from '@heroicons/react/24/solid'
import './details.css';



function ProductDetail() {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
      <div className='flex justify-between items-center p-7'>
      <h2 className="text-xl font-medium">Product Detail</h2>
      <div>
        <XCircleIcon className="h-5 w-5 text-black"/>
      </div>
      </div>
    </aside>
  );
}

export default ProductDetail;
