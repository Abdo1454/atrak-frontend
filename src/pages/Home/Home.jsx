import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Hero from '../../components/home/Hero'
import FeaturedCategories from '../../components/home/FeaturedCategories'
function Home() {
  return (
    <div>
        <Hero />
        <FeaturedCategories />
    </div>
  )
}

export default Home