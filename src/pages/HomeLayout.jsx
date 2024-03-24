import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Navbar, Loading} from '../components';

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
     <>
       {/* <nav>
        <span  className='text-4xl text-primary'>Flexicon Store</span>
       </nav> */}
       <Header/>
       <Navbar/>
       {isPageLoading ? (
          <Loading/>        
       ):(
        <section className='align-element py-20'>
           <Outlet/>
        </section>
       )}
       {/* <section className='mx-auto max-w-6xl px-8 py-20'>
          
       </section> */}
       
     </>
  );
};

export default HomeLayout;