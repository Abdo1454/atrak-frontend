import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Hero from '../../components/home/Hero';
import FeaturedCategories from '../../components/home/FeaturedCategories';
// import ProductCard from '../../components/home/ProductCard';
import BestSellers from '../../components/home/BestSellers';
import NewArrivals from '../../components/home/NewArrivals';
function Home() {
  return (
    <div>
        <Hero />
        <FeaturedCategories />
        <BestSellers />
        <NewArrivals />
    </div>
  )
}

export default Home