import React from 'react';

const Services: React.FC = () => {
  return (
    <div className=''>
      <section className="py-16 ">
        <div className="container px-4 md:px-6">
          <div className="space-y-6 ">
            <h2 className="text-3xl  text-center font-bold text-secondary tracking-tighter sm:text-4xl md:text-4xl">
              Nos Services
            </h2>
            {/* <p className="max-w-[600px] text-justify mx-auto md:text-xl/relaxed">
            
              Nous offrons une large gamme de services professionnels de planification d'événements pour aider à faire de vos événements une réussite.
            </p> */}
          </div>
          <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="p-6 flex flex-col items-center justify-center h-full bg-gradient-to-br from-gray-200">
                <CalendarIcon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-primary mt-2 mb-2">Planification d'événements</h3>
                <p className="text-muted-foreground mt-2 text-justify">
                  De la conception à l'exécution, nous gérons chaque aspect de vos besoins en planification d'événements.
                </p>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="p-6 flex flex-col items-center justify-center h-full bg-gradient-to-br from-gray-200">
                <MegaphoneIcon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-primary mt-2 mb-2">Promotion d'événements</h3>
                <p className="text-muted-foreground mt-2 text-justify">
                  Nous créons et exécutons des campagnes de marketing ciblées pour promouvoir efficacement votre événement.
                </p>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="p-6 flex flex-col items-center justify-center h-full bg-gradient-to-br from-gray-200">
                <ClipboardListIcon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-primary mt-2 mb-2">Gestion d'événements</h3>
                <p className="text-muted-foreground mt-2 text-justify">
                  Notre équipe expérimentée s'occupe de toute la logistique et de la coordination pour garantir le bon déroulement de votre événement.
                </p>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="p-6 flex flex-col items-center justify-center h-full bg-gradient-to-br from-gray-200">
                <BriefcaseIcon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-primary mt-2 mb-2">Événements d'entreprise</h3>
                <p className="text-muted-foreground mt-2 text-justify">
                  Des conférences aux activités de renforcement d'équipe, nous sommes spécialisés dans la création d'événements d'entreprise mémorables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
};

const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
};

const ClipboardListIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
};

const MegaphoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
};


