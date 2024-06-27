import React from 'react'
import { NavLink } from 'react-router-dom'
function HeroSection() {
  return (
    <div> <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('src/assets/images/hero1.webp')] bg-cover bg-center">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
              Discover Exciting Startup <span className='bg-[#ed7227] py-0 mt-4'>Events</span> 
            </h1>
            <p className="max-w-[600px] text-white md:text-xl">
              Explore a curated selection of the latest startup events and conferences happening around the world.
              Connect with entrepreneurs, investors, and industry leaders.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <NavLink
              to="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Explore Events
            </NavLink>
            <NavLink
              to="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Register Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default HeroSection