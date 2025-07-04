import Link from 'next/link.js';
import ProductCard from '../../components/Products/ProductCard.jsx'
//import { useRouter } from 'next/navigation';
import React from 'react';

const HomePage = async () => {
  //  const router = useRouter();
  // const handleNavigation = () => {
  //   router.push('/dashboard')
  // }

  const res = await fetch("http://localhost:5000/products", {
    cache : 'no-store'
  });
  const products = await res.json();
  console.log(products)
  return (
    <div>
      <div>
        {/* <button onClick={handleNavigation} className='mt-5'>Dashboard</button> */}
        <h2 className='text-4xl text-center mt-2'>Data Fetching, Caching, and Revalidating</h2>
      </div>

      <div className='grid grid-cols-4 gap-8 w-[90%] mx-auto mt-10'>
        {products.slice(0, 4).map((product) =>
          <ProductCard key={product} product={product} />)}
      </div>
      <div className='flex justify-center mt-10'>
        <Link href="/products">
          <button className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer'>
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
