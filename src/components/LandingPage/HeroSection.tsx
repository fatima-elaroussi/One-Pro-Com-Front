
import { NavLink } from 'react-router-dom'
function HeroSection() {
  return (
    <div> <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/images/hero5.webp')] bg-cover bg-center">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-5 lg:ml-20 ">


            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-100 ">
            
            Découvrez des <span className="text-[#ed7227] mt-2  ">Evénements </span> passionnants pour les startups
            </h1>
            <p className="max-w-[600px] text-white md:text-xl">
              
            Explorez une sélection soignée des derniers événements et conférences de startups se déroulant à travers le monde. Connectez-vous avec des entrepreneurs, des investisseurs et des leaders de l'industrie.
            </p>
          </div>
          <div className="flex flex-col  gap-2 min-[400px]:flex-row  lg:ml-20">
            <NavLink
              to="#"
              className="inline-flex h-10 mt-8 items-center justify-center text-white rounded-md bg-secondary px-8 text-sm font-medium  shadow transition-colors bg-gradient-to-r hover:from-orange-700 hover:to-yellow-500 "
            >
              Explore Events
            </NavLink>
           
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default HeroSection