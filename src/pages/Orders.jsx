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
    try {
      const response = await customFetch.get('/orders',{
        params, headers:{
          Authorization: `Bearer ${user.token}`
        }
      })
      console.log(response);
      return {orders:response.data.data,meta:response.data.meta}
    } catch (error) {
      console.log(error);
    const errorMessage = 
      error?.response?.data?.message ||
      'there was an error placing your order';
      toast.error(errorMessage);
      if(error.response.status === 401 || 403) return redirect('/login');
    } 
     
  }

const Orders = () => {
  const {meta} = useLoaderData();
  if(meta.pagaination.total < 1){
    return <SectionTitle text='please make an order'/>;
  }
  return (
    <h1 className="text-3xl font-bold underline">
    Orders
  </h1>
  )
}

export default Orders