import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Hero from '../../components/home/Hero';
import FeaturedCategories from '../../components/home/FeaturedCategories';
// import ProductCard from '../../components/home/ProductCard';
import BestSellers from '../../components/home/BestSellers';
import NewArrivals from '../../components/home/NewArrivals';
import SpecialOffers from '../../components/home/SpecialOffers';
import LuxuryCollections from '../../components/home/LuxuryCollections';
function Home() {
  return (
    <div>
        <Hero />
        <FeaturedCategories />
        <BestSellers />
        <NewArrivals />
        <SpecialOffers />
        <LuxuryCollections />
    </div>
  )
}

export default Home