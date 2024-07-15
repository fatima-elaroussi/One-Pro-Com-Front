import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const  About: React.FC = () =>{

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  
  return (
         
      <div>

<section className="w-full pt-10 ">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4
           lg:grid-cols-5 xl:gap-0  ">
            <div className="flex flex-col items-center justify-center space-y-3 transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="rounded-full ">
                <WorkflowIcon className="h-8 w-8 text-gray-500" />
                
              </div>
              <h3 className="text-sm md:text-lg font-normal text-gray-600">Collaboration</h3>
              
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="rounded-full ">
                <FocusIcon className="h-8 w-8 text-gray-500" />
              </div>
              <h3 className="text-sm md:text-lg font-normal text-gray-600">Attention to Detail</h3>
              
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="rounded-full ">
                <LightbulbIcon className="h-8 w-8 text-gray-500" />
              </div>
              <h3 className="text-sm md:text-lg font-normal text-gray-600">Innovation</h3>
             
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="rounded-full ">
                <HandshakeIcon className="h-8 w-8 text-gray-500" />
              </div>
              <h3 className="text-sm md:text-lg font-normal text-gray-600">Professionalism</h3>
             
            </div>
            <div className="flex flex-col items-center justify-center space-y- transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="rounded-full ">
                <PartyPopperIcon className="hidden md:block h-8 w-8 text-gray-500" />
              </div>
              <h3 className=" hidden md:block text-sm md:text-lg font-normal text-gray-600">Success</h3>
             
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16  ">
      <h6 className="text-2xl text-center mb-16 font-bold tracking-tighter flex justify-center items-center text-secondary sm:text-3xl md:text-4xl lg:text-4xl">
              Élevez vos événements
              </h6>
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <img
              src="images/about2.webp"
              width="800"
              height="600"
              alt="Hero Image"
              className="mx-auto mt-2  rounded-bl-full  object-cover object-center"
            />
            <div className="flex flex-col space-y-3 text-center mt-3  md:text-justify  lg:space-y-5" data-aos="fade-left">
            <h6 className="text-lg font-semibold tracking-tighter flex  items-center text-[#EBB016] font-charm sm:text-xl md:text-2xl lg:text-3xl">
              Qui Sommes Nous
              </h6>
              <p className="max-w-[600px] text-justify p-4 text-base md:text-xl mx-auto  ">
              <span className='text-primary  text-xl font-bold font-charm'><span className='text-3xl'>O</span>ne<span className='text-3xl'>P</span>ro</span><span className='text-secondary font-bold font-charm'><span className='text-3xl'>C</span>om</span>, nous nous spécialisons dans l'organisation d'événements professionnels de haut calibre. Que ce soit pour des conférences, des séminaires ou des galas d'entreprise, notre équipe dédiée veille à chaque détail pour garantir une expérience impeccable et mémorable pour vos invités. Des fonctions d'entreprise aux rassemblements sociaux, nous créons des expériences inoubliables en prenant soin de chaque détail pour assurer le succès de votre événement.
              </p>
            </div>
          </div>
        </div>
      </section>
     
    </div>
    
  )
}

export default About;

const FocusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      </svg>
    )
  }
  
  
  
  const HandshakeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </svg>
    )
  }
  
  
  const LightbulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    )
  }
  
  
  const WorkflowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="8" height="8" x="3" y="3" rx="2" />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
        <rect width="8" height="8" x="13" y="13" rx="2" />
      </svg>
    )
  }
  
  const PartyPopperIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5.8 11.3 2 22l10.7-3.79" />
        <path d="M4 3h.01" />
        <path d="M22 8h.01" />
        <path d="M15 2h.01" />
        <path d="M22 20h.01" />
        <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
        <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" />
        <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" />
        <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
      </svg>
    )
  }
  
  
  