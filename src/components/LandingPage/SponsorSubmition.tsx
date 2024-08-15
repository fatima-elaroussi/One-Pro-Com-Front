import React from 'react'

const SponsorSubmition: React.FC = () => {
  return (
    <div> <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full  p-4 md:p-8">
    <div className="bg-[url('/images/eventSponsor5.webp')]  bg-cover bg-center  flex  justify-center p-8 text-white text-center">
      <h2 className="text-5xl font-bold text-slate-200 my-auto">
      Êtes-vous intéressé par le parrainage <span className=" font-normal text-5xl">de l'événement ?</span>  </h2>
    </div>
    <div className="bg-card rounded-lg p-6 md:p-8 flex flex-col gap-6">
      <div className="space-y-10">
        <h2 className="text-3xl font-bold text-third">Demande de Parrainage</h2>
        <p className="text-muted-foreground">Veuillez remplir le formulaire ci-dessous et nous vous contacterons dans les meilleurs délais.</p>
      </div>
      <form className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="name">Nom</label>
          <input id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email">Email</label>
          <input id="email" type="email"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "/>
        </div>
        <div className="grid gap-2">
          <label htmlFor="phone">Phone</label>
          <input id="Phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "/>
        </div>
        <div className="grid gap-2">
          <label htmlFor="Company">Société</label>
          <input id="Company" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "/>
        </div>
        <div className="grid gap-2">
          <label htmlFor="Job">Titre du poste</label>
          <input id="Job" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "/>
        </div>
        <button type="submit" className="py-3 px-5 text-sm font-medium text-center w-full border text-white  bg-primary  border-gray-400 hover:text-white rounded-lg hover:bg-none   ">Soumettre </button>
       
       
      </form>
    </div>
  </div></div>
  )
}

export default SponsorSubmition