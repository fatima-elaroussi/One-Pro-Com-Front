

const Footer: React.FC = () =>  {
  return (
    <div className="mt-5 border border-solid h-full bg-white  pt-8 pl-10">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 lg:gap-20 ">
        <div className="mt-1 ">
          <h2 className=" font-bold text-l md:text-2xl"><span className='text-primary text-xl font-bold font-charm'><span className='text-3xl'>O</span>ne<span className='text-3xl'>P</span>ro</span><span className='text-secondary font-bold font-charm'><span className='text-3xl'>C</span>om</span>
          </h2>
          <h6 className="mt-6 text-gray-500 text-justify text-xs md:text-sm">
          ONE PRO COM est une agence de communication opérationnelle qui vous accompagne dans la promotion de vos marques et produits. Nous proposons des solutions clés en main à nos partenaires pour développer la stratégie commerciale de leurs produits et services.
         
          </h6>
          
        </div>
        <div className="">
          <h3 className="text-primary font-semibold mt-5">Informations</h3>
          <ul className="text-gray-500">
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
          <ul className="text-gray-500">
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
   
        <div className=" mt-5">
          <h3 className="text-primary font-semibold ">Contact</h3>
          <div className="flex mt-3">
          <MapPinIcon className="mr-3 text-gray-500"/>
          <h6 className=" text-xs  md:text-sm text-gray-500">
          6, rue 6 Octobre Bd el Massira al Khadra, Quartier Racine
           </h6>
          </div>
<div className="flex mt-5">
  
 <PhoneIcon className="mr-3 text-gray-500"/> 
<h6 className=" text-xs  md:text-sm text-gray-500">
           
           +212 675 416 267
           </h6>
</div>
        <div className="flex mt-5">
          <MailIcon className="mr-3 text-gray-500"/>
        <h6 className=" text-xs  md:text-sm text-gray-500">
          
          contact@oneprocom.ma
           </h6>
          
          </div>   
          <div className="flex gap-7 mt-5">
            <a href="https://www.facebook.com/profile.php?id=100090262730898&mibextid=ZbWKwL"> <FacebookIcon className="text-gray-500"/></a>
            <a href="https://www.instagram.com/oneprocom/"> <InstagramIcon className="text-gray-500"/></a>
            <a href="https://www.linkedin.com/in/one-pro-com-8a56a9268"><LinkedinIcon className="text-gray-500"/> </a>
           </div>
          {/* <input className=" w-2/3 md:w-full text-xs  md:text-sm mt-4 p-5 pl-0   bg-[#F5F5F5] text-[#9B9B9B] rounded-lg" type="email" placeholder="Your email address" /> */}
          <button className="w-2/3 bg-secondary text-sm mt-4 text-white rounded-lg p-3">Subscribe</button>
        </div>
      </div>
      <footer className="mt-10 md:flex ">
        <div className="text-gray-500 mt-3 md:block hidden w-1/3 text-xs">
          © 2024 OneProCom. All rights reserved.
        </div>
        
      </footer>
    </div>
  )
}

export default Footer;

const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>  {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>  {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>  {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>  {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>  {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


