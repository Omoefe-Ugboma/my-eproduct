import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = '/products';

export const loader = async ({ request }) =>{
  const { response } = await customFetch(url);
  console.log(response);
  return null;
} 

const Products = () => {
  return (
    <>
      <Filters/>
      <ProductsContainer/>
      <PaginationContainer/>
    </>
  )
}

export default Products