import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingEvents: React.FC = () => {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl font-bold text-secondary text-center md:text-3xl lg:text-4xl">Événements à venir</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <EventCard
            imageSrc="/images/event3.webp"
            title="Conférence Tech 2024"
            date="June 15, 2024"
            time="9:00 AM - 5:00 PM"
            location="Marakech"
            description="Rejoignez-nous pour la conférence annuelle Tech, où les leaders de l'industrie et les innovateurs se réunissent pour partager des idées et explorer les dernières avancées en technologie."
          />
          <EventCard
            imageSrc="/images/event4.webp"
            title="Rencontre de design"
            date="July 10, 2024"
            time="6:30 PM - 8:30 PM"
            location="Fes"
            description="Les designers de tous horizons sont invités à cette rencontre intime pour réseauter, partager des idées et collaborer sur des projets nouveaux et passionnants."
          />
          <EventCard
            imageSrc="/images/event2.webp"
            title="Sommet du startups"
            date="August 1, 2024"
            time="2:00 PM - 6:00 PM"
            location="Rabat"
            description="Les entrepreneurs en herbe auront l'occasion de présenter leurs idées d'affaires innovantes à un panel d'experts de l'industrie et d'investisseurs."
          />
          <EventCard
            imageSrc="/images/event1.webp"
            title="Sommet du marketing"
            date="September 20, 2024"
            time="8:00 AM - 4:00 PM"
            location="CasaBlanca"
            description="Rejoignez des professionnels du marketing du monde entier qui partageront leurs idées, stratégies et meilleures pratiques pour favoriser la croissance des entreprises."
          />
        </div>
      </div>
    </section>
  );
};

interface EventCardProps {
  imageSrc: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ imageSrc, title, date, time, location, description }) => (
  <div className="rounded-lg bg-card p-4 shadow-sm transition-all hover:shadow-md">
    <div className="mb-4">
      <img
        src={imageSrc}
        alt="Event Image"
        width={400}
        height={250}
        className="h-[200px] w-full rounded-lg object-cover"
      />
    </div>
    <div className="space-y-2">
      <h3 className="text-lg font-medium text-primary">{title}</h3>
      <p className="text-muted-foreground line-clamp-2">{description}</p>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <CalendarIcon className="h-4 w-4 text-gray-600" />
        <span className='text-gray-600'>{date}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <ClockIcon className="h-4 w-4 text-gray-600" />
        <span className='text-gray-600'>{time}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPinIcon className="h-4 w-4 text-gray-600" />
        <span className='text-gray-600'>{location}</span>
      </div>
      
      <Link
      to="#"
      className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm text-primary font-medium border  border-gray-400 shadow transition-colors w-full hover:bg-primary/80 hover:border-none hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    >
      Learn More
    </Link>
    </div>
  </div>
);

const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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

const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);



export default UpcomingEvents;
