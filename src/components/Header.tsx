import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from React Router
import { ModeToggle } from './mode-toggle';
import Logo from '../assets/logo.png';
import { Button } from './ui/button';
import { HambergerMenu } from 'iconsax-react'; // Import your icon components
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavItemProps {
  to: string;
  currentPath: string;
  children: React.ReactNode;
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this threshold as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full flex flex-wrap items-center bg-background justify-between p-4 md:p-6 border-b-2 sticky top-0 z-10">
      <div className="w-full flex items-center justify-between">
        <Link to="/">
          <img src={Logo} className="w-12" alt="Logo" />
        </Link>
        <ul className={`ml-4 space-x-4 hidden md:flex`}>
          <NavItem to="/" currentPath={location.pathname}>Home</NavItem>
          <NavItem to="/service" currentPath={location.pathname}>Services</NavItem>
          <NavItem to="/portfolio" currentPath={location.pathname}>Portfolio</NavItem>
          <NavItem to="/aboutus" currentPath={location.pathname}>About Us</NavItem>
          <NavItem to="/blog" currentPath={location.pathname}>Blog</NavItem>
          <NavItem to="/contactus" currentPath={location.pathname}>Contact Us</NavItem>
        </ul>
        <div className='flex items-center gap-2'>
          <Button variant={"outline"}>Login</Button>
          <ModeToggle />
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"outline"} className='p-2' onClick={toggleMenu}>
                  <HambergerMenu size="32" variant="TwoTone" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className='mx-auto'>
                    <Link to="/">
                      <img src={Logo} className="mx-auto w-12" alt="Logo" />
                    </Link>
                    Abhinav Group
                  </SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <ul className="ml-4  md:flex">
                    <NavItem to="/" currentPath={location.pathname}>Home</NavItem>
                    <NavItem to="/service" currentPath={location.pathname}>Services</NavItem>
                    <NavItem to="/portfolio" currentPath={location.pathname}>Portfolio</NavItem>
                    <NavItem to="/aboutus" currentPath={location.pathname}>About Us</NavItem>
                    <NavItem to="/blog" currentPath={location.pathname}>Blog</NavItem>
                    <NavItem to="/contactus" currentPath={location.pathname}>Contact Us</NavItem>
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </div>
  );
}

// Custom component to handle navigation links and highlight the active one
function NavItem({ to, currentPath, children }: NavItemProps) {
  const isActive = to === currentPath;
  return (
    <li>
      <Link to={to} className={isActive ? 'font-bold' : ''}>{children}</Link>
    </li>
  );
}

export default Header;
