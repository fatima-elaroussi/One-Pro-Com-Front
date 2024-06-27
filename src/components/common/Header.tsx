import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MountainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
);

const Header: React.FC = () => {
  const dispatch = useDispatch();
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
    <header className="flex h-16 items-center justify-between px-4 md:px-6">
      <NavLink to="#" className="flex items-center gap-2">
        <img src="src/assets/images/logo.webp" alt="" width="150"
    height="150" className=''/>

      </NavLink>
      <nav className="hidden md:flex md:items-center md:gap-6">
        <NavLink to="#" className="text-sm font-medium transition-colors hover:text-[#ed7227]">
          Home
        </NavLink>
        <NavLink to="#" className="text-sm font-medium transition-colors hover:text-[#ed7227]">
          Services
        </NavLink>
        <NavLink to="#" className="text-sm font-medium transition-colors hover:text-[#ed7227]">
          About
        </NavLink>
        <NavLink to="#" className="text-sm font-medium transition-colors hover:text-[#ed7227]">
          Contact
        </NavLink>
        {isAuthenticated && (
          <button onClick={handleLogout} className="text-sm font-medium transition-colors hover:text-[#ed7227]">
            Logout
          </button>
        )}
      </nav>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        className="md:hidden "
      >
        <MenuIcon  />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className="grid gap-4 p-4" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <NavLink to="#" className="flex items-center gap-2 text-lg font-semibold">
          <img src="src/assets/images/logo.webp" alt="" width="150"
    height="150" className=''/>
            {/* <MountainIcon className="h-6 w-6" /> */}
            
          </NavLink>
          <NavLink
            to="#"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#ed7227]"
          >
            Home
          </NavLink>
          <NavLink
            to="#"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#ed7227]"
          >
            Services
          </NavLink>
          <NavLink
            to="#"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#ed7227]"
          >
            About
          </NavLink>
          <NavLink
            to="#"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#ed7227]"
          >
            Contact
          </NavLink>
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#ed7227]"
            >
              Logout
            </button>
          )}
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
