

const Footer = () => {
  return (
    <div className="mt-16 border border-solid h-full bg-white  pt-10 pl-10">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-20 ">
        <div className=" ">
          <h2 className=" font-bold text-l md:text-2xl"><span className='text-primary text-xl font-bold font-charm'><span className='text-3xl'>O</span>ne<span className='text-3xl'>P</span>ro</span><span className='text-secondary font-bold font-charm'><span className='text-3xl'>C</span>om</span>
          </h2>
          <h6 className="mt-6 text-[#7E7E7E] text-justify text-xs md:text-sm">
          ONE PRO COM est une agence de communication opérationnelle qui vous accompagne dans la promotion de vos marques et produits. Nous proposons des solutions clés en main à nos partenaires pour développer la stratégie commerciale de leurs produits et services.
         
          </h6>
          <h6 className="mt-6 text-xs md:text-sm"></h6>
        </div>
        <div className="">
          <h3 className="text-primary font-semibold mt-5">Informations</h3>
          <ul className="text-[#7E7E7E]">
            <li className="mt-5 text-xs md:text-sm">
            Acceuil
            </li>
            <li className="mt-2 text-xs md:text-sm">
            Nos Services
            </li>

            <li className="mt-2 text-xs md:text-sm">
            Qui Sommes Nous
            </li>
            <li className="mt-2 text-xs md:text-sm">
            Contactez Nous
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-primary font-semibold mt-5">Services</h3>
          <ul className="text-[#7E7E7E]">
            <li className="mt-5 text-xs md:text-sm">
            Planification d'événements
            </li>
            <li className="mt-2 text-xs md:text-sm">
            Promotion d'événements
            </li>

            <li className="mt-2 text-xs md:text-sm">
            Gestion d'événements
            </li>
            <li className="mt-2 text-xs md:text-sm ">
            Événements d'entreprise
            </li>
          </ul>
        </div>
        {/* <div className="">
          <h3 className="text-primary font-semibold mt-5">Useful links</h3>
          <ul className="text-[#7E7E7E]">
            <li className="mt-5 text-xs md:text-sm">
              My Account
            </li>
            <li className="mt-2 text-xs md:text-sm">
              Offres            </li>

            <li className="mt-2 text-xs md:text-sm">
              Become a Partner
            </li>
            <li className="mt-2 text-xs md:text-sm">
              S’inscrire
            </li>
          </ul>
        </div> */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-primary font-semibold mt-5">Contact</h3>

          <h6 className="mt-5 text-xs  md:text-sm text-[#7E7E7E]">
          6, rue 6 Octobre Bd el Massira al Khadra, Quartier Racine
           </h6>
           <h6 className="mt-5 text-xs  md:text-sm text-[#7E7E7E]">
           Lundi - Samedi
           +212 675 416 267
           </h6> <h6 className="mt-5 text-xs  md:text-sm text-[#7E7E7E]">
          Email
          contact@oneprocom.ma
           </h6>
          <input className=" w-2/3 md:w-full text-xs  md:text-sm mt-4 p-5 pl-0   bg-[#F5F5F5] text-[#9B9B9B] rounded-lg" type="email" placeholder="Your email address" />
          <button className="w-2/3 bg-secondary text-sm mt-4 text-white rounded-lg p-3">Subscribe</button>
        </div>
      </div>
      <footer className="mt-10 md:flex ">
        <div className="text-[#7E7E7E] mt-3 md:block hidden w-1/3 text-xs">
          © 2024 OneProCom. All rights reserved.
        </div>
        
      </footer>
    </div>
  )
}

export default Footer