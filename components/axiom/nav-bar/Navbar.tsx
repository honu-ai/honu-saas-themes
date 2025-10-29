'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Logo from '@/components/logo';

export type NavbarProps = {
  links: { label: string; path: string }[];
  children?: React.ReactNode;
  brandName?: string;
};

const Navbar: React.FC<NavbarProps> = ({ links, children, brandName }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // const isDashboard = pathname?.startsWith('/dashboard') ?? false;

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 shadow-sm backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className='container mx-auto flex h-17 items-center justify-between px-4'>
        {/* Logo */}
        <Logo brandName={brandName} />
        {/* Desktop Navigation */}
        <nav className='hidden items-center space-x-1 lg:flex'>
          <ul className='flex space-x-1'>
            {links.map((item) => (
              <li key={item.label}>
                {pathname === item.path ? (
                  <span className='text-primary relative px-4 py-2 text-lg font-medium'>
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className='text-foreground/80 hover:text-foreground relative rounded-xl border border-transparent bg-transparent px-4 py-2 text-lg transition duration-200 hover:border-slate-300'
                    passHref
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex items-center lg:hidden'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label='Toggle menu'
            className='ml-2'
          >
            {mobileMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </Button>
        </div>
        <div className='hidden lg:block'>{children}</div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transform bg-white transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <nav className='container mx-auto px-4 py-6'>
          <ul className='flex flex-col items-center space-y-6'>
            {links.map((item) => (
              <li key={item.label}>
                {pathname === item.path ? (
                  <span className='text-primary relative px-4 py-2 text-lg font-medium'>
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className='text-foreground/80 hover:text-foreground relative rounded-xl border border-transparent bg-transparent px-4 py-2 text-lg transition duration-200 hover:border-slate-300'
                    passHref
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className='block lg:hidden'>{children}</div>
      </div>
    </header>
  );
};

export default Navbar;
