import { useLoaderData } from 'react-router-dom';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const OrdersList = () => {
  const {orders,meta} = useLoaderData()
  return  <div className='mt-8'>
     <h4 className='mb-4 capitalize'>total orders : {meta.pagination.total}</h4>
    <div className='overflow-x-auto'>
       <table className='table table-zebra'>
         {/* head */}
         <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
         </thead>
       </table>
    </div>
  </div>
};

export default OrdersList;
