import { Link, useLoaderData} from 'react-router-dom';
import { formatPrice } from '../utils';

const ProductsList = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div className='mt-12 grid gap-y-8'>
         {products.map((product)=>{
          const {title,price,image} = product.attributes
          const dollarsAmount = formatPrice(price);
          return (
              <Link 
                key={product.id}
                to={`/products/${product.id}`}
                className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap
                bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'
              >
                <img 
                   src={image} 
                   alt={title} 
                   className='h-24 w-24 rounded-lg sm:h-32 
                   sm:w-32 object-cover group-hover:scale-105 transition duration-300'
                   
                   />
              </Link>
          );
          
         })}
    </div>
  )
}

export default ProductsList
