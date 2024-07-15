import React from 'react'

const ContactUs:React.FC=()=> {
  return (
    
    <div className="border border-solid shadow-2xl my-10 mx-auto  w-72 md:w-2/3 ">
    <h2 className=" md:text-4xl tracking-tight mt-10 font-bold text-center text-secondary ">Contactez Nous</h2>

    <div className="md:grid md:grid-cols-2 md:gap-5 gap-0 flex flex-col justify-center items-center ">
    <section className="bg-whit w-52 md:w-full">
<div className="py-8 lg:py-16 px-4 mx-auto   max-w-screen-md">
    <p className="mb-8 lg:mb-8 font-light  text-black md:text-lg text-xs">Laissez-nous un message</p>
    <form action="#" className="space-y-8">
      
        <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-400">Nom</label>
            <input type="text" id="subject" className="block p-3 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Faites-nous savoir comment nous pouvons vous aider." required/>
        </div>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400 ">Email</label>
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="email@gmail.com" required/>
        </div>
        <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400 ">Votre message</label>
            <textarea id="message" rows={6} className="block p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Laissez un commentaire..."></textarea>
        </div>
        <button type="submit" className="py-3 px-5 text-sm font-medium text-center w-full border text-primary border-gray-400 hover:text-white rounded-lg hover:bg-primary   ">Envoyer </button>
    </form>
</div>
</section>

<div className='md:mt-30 mt-3 '>

<div className="flex mt-3">
          <MapPinIcon className="mr-3 "/>
          <h6 className=" text-xs  md:text-sm text-gray-500">
          6, rue 6 Octobre Bd el Massira al Khadra, Quartier Racine
           </h6>
          </div>
<div className="flex mt-5">
  
 <PhoneIcon className="mr-3 "/> 
<h6 className=" text-xs  md:text-sm text-gray-500">
           
           +212 675 416 267
           </h6>
</div>
        <div className="flex mt-5">
          <MailIcon className="mr-3 "/>
        <h6 className=" text-xs  md:text-sm text-gray-500">
          
          contact@oneprocom.ma
           </h6>
          
          </div>  
      {/* <h6  className='text-xs p-2  '>6, rue 6 Octobre Bd el Massira al Khadra, Quartier Racine</h6>
      <h6  className='text-xs p-2 mt-5'>+212 675 416 267</h6>
      <h6  className='text-xs p-2 mt-5'>contact@oneprocom.ma</h6> */}
      <div className="flex gap-5 mt-5">
            <a href="https://www.facebook.com/profile.php?id=100090262730898&mibextid=ZbWKwL"> <FacebookIcon /></a>
            <a href="https://www.instagram.com/oneprocom/"> <InstagramIcon /></a>
            <a href="https://www.linkedin.com/in/one-pro-com-8a56a9268"><LinkedinIcon /> </a>
           </div>
      
      <div className='px-1 md:mt-10 mt-7 md:w-3/4'>
    
        <iframe className='w-64 mx-auto h-60 md:w-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.6773269233604!2d-7.644111025267424!3d33.587726242117014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2e8d0b537d3%3A0xa4c83808490333a7!2sWeStartUp%20%3A%20CR%C3%89ATION%20ET%20DOMICILIATION%20d&#39;entreprise%20%7C%20Espaces%20de%20Coworking%20%C3%A0%20Casablanca!5e0!3m2!1sfr!2sma!4v1721073700935!5m2!1sfr!2sma" loading="lazy"></iframe>  
      </div>
    </div>
    </div>

   
  </div>
  )
}

export default ContactUs;

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
      width="20"
      height="20"
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
      width="20"
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

