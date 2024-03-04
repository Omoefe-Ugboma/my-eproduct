import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
     <>
       <nav>
        <span  className='text-4xl text-primary'>Flexicon Store</span>
       </nav>
       <section className='mx-auto max-w-6xl px-8 py-20'>
       <Outlet/>
       </section>
       
     </>
  )
}

export default HomeLayout