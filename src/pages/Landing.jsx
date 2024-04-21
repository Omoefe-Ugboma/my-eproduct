import { FeaturedProducts, Hero } from "../components";
// import FeaturedProducts from "../components/FeaturedProducts";

import { customFetch } from "../utils";
const url = '/products?featured=true';

const featuredProductsQuery = {
  queryKey:['featuredProducts'],
  queryFn:() => 
}


export const loader = (queryClient) => async () =>{
   const response = await customFetch(url);
   const products = response.data.data;
   return {products};
};

const Landing = () => {
  return (
    <>
      <Hero/>
      <FeaturedProducts/>
  </>
  );
};

export default Landing