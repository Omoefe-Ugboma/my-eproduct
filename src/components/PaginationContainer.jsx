import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
const PaginationContainer = () => {
  const {meta} = useLoaderData();
  const {pageCount, page} = meta.pagination;

    const pages = Array.from({ length: pageCount }, (_,index)=>{
    return index + 1;
    });
    const handlePageChange = (pageNumber) =>{
      console.log(pageNumber);
    }
    if(pageCount < 2) return null
    return (
      <div>
        <h5>pagination</h5>
      </div>
    )
}

export default PaginationContainer;
