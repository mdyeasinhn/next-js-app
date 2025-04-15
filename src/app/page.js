"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const HomePage = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push('/dashboard')
  }

  return (
    <div>
      <div>
      <button onClick={handleNavigation} className='mt-5'>Dashboard</button>
      </div>
    </div>
  );
};

export default HomePage;