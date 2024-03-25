import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
const PaginationContainer = () => {
  const {meta} = useLoaderData()
  const {pageCount, page} = meta.pagination
   return (
    <div>
      <h5>pagination</h5>
    </div>
  )
}

export default PaginationContainer;
