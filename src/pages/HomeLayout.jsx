import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
     <>
       <nav>
        <span>Flexicon Store</span>
       </nav>
       <Outlet/>
     </>
  )
}

export default HomeLayout