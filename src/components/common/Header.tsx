import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//import { useSelector, useDispatch } from 'react-redux';
import { IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// const MountainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//   </svg>
// );

const Header: React.FC = () => {
  //const dispatch = useDispatch();
  const isAuthenticated = false;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    // dispatch(logout());
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <header className="flex h-16 items-center justify-between bg-white md:fixed w-full px-4 md:px-6 ">
      <div className="flex items-center md:gap-5  lg:gap-28 xl:gap-48  ">
      <NavLink to="#" className="flex items-center  ">
      <img src="src/assets/images/logo.webp" alt="" width="100" height="100" className=''/>
    </NavLink>
    <div className="flex-1 flex justify-center">
      <nav className="hidden md:flex md:items-center  md:gap-8 lg:gap-54 xl:gap-64">
        <div className="hidden md:flex md:items-center  md:gap-5 xl:gap-12">
        <NavLink to="#" className=" md:text-xs lg:text-sm text-third  font-medium transition-colors  hover:text-[#ed7227]">
          ACCEUIL
        </NavLink>
        <NavLink to="#" className=" md:text-xs lg:text-sm text-third font-medium transition-colors hover:text-[#ed7227]">
         NOS SERVICES
        </NavLink>
        <NavLink to="#" className="md:text-xs lg:text-sm text-third font-medium transition-colors hover:text-[#ed7227]">
          QUI SOMMES NOUS
        </NavLink>
        <NavLink to="#" className="md:text-xs lg:text-sm text-third font-medium transition-colors hover:text-[#ed7227]">
          CONTACTEZ NOUS
        </NavLink>
        </div>
        
        <div className='flex gap-2 items-center '>
        <NavLink
              to="#"
              className="inline-flex h-9 items-center justify-center rounded-md border   py-0 text-white bg-primary bg-gradient-to-r hover:from-primary hover:to-blue-500 px-4 text-xs font-medium shadow-sm "
            >
              Sign Up 
            </NavLink>
            <NavLink
              to="#"
              className="inline-flex h-9 items-center justify-center rounded-md border   py-0 text-white bg-secondary bg-gradient-to-r hover:from-orange-700 hover:to-yellow-400 px-4 text-xs font-medium shadow-sm "
            >
              Sign IN 
            </NavLink>
            
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="text-sm font-medium transition-colors hover:text-[#ed7227]">
            Logout
          </button>
        )}
      </nav>
    </div>
      </div>
   
       
      
    <div className='md:hidden'>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        className="hidden"
      >
        <MenuIcon />
      </IconButton>
    </div>
  
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <div className="grid gap-4 p-4" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <NavLink to="#" className="flex items-center gap-2 text-lg font-semibold ">
          <img src="src/assets/images/logo.webp" alt="" width="150" height="150" className=''/>
        </NavLink>
        <NavLink to="#" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#ed7227]">
          Home
        </NavLink>
        <NavLink to="#" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#ed7227]">
          Services
        </NavLink>
        <NavLink to="#" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#ed7227]">
          About
        </NavLink>
        <NavLink to="#" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#ed7227]">
          Contact
        </NavLink>
        <NavLink
              to="#"
              className="inline-flex h-10 items-center justify-center rounded-md border   text-white bg-secondary px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Sign Up 
            </NavLink>
            <NavLink
              to="#"
              className="inline-flex h-10 items-center justify-center rounded-md border   text-white bg-secondary px-4 text-sm font-medium shadow-sm  focus-visible:outline-none focus-visible:ring-1  disabled:pointer-events-none disabled:opacity-50"
            >
              Log In 
            </NavLink>
        {isAuthenticated && (
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#ed7227]">
            Logout
          </button>
        )}
      </div>
    </Drawer>
  </header>
  
  );
};

export default Header;
