import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import { OrdersList, PaginationContainer, SectionTitle } from '../components';

export const loader = 
  (store) =>
  async ({ request }) =>{
    const user = store.getState().userState.user;

    if(!user){
      toast.warn('You must logged in to view orders');
      return redirect('/login');
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    return null;
  }

const Orders = () => {
  return (
    <h1 className="text-3xl font-bold underline">
    Orders
  </h1>
  )
}

export default Orders