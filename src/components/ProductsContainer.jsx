import { useLoaderData } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const ProductsContainer = () => {
  return (
    <>
      <ProductsList/>
      <ProductsGrid/>
    </>
  )
}

export default ProductsContainer;
