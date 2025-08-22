import React from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

type FooterLinkItem = {
  label: string;
  path: string;
};

export type FooterProps = {
  companyName: string;
  description: string;
};

const Footer: React.FC<FooterProps> = ({ companyName, description }) => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Features', path: '#benefits' },
    { label: 'How it works', path: '#solution' },
    { label: 'FAQ', path: '#faq' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
  ];

  return (
    <footer className='border-primary/20 from-card/60 to-muted/20 relative overflow-hidden border-t bg-gradient-to-br px-4 py-16'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-30'>
        <div className='bg-primary/10 absolute top-10 left-1/4 h-48 w-48 animate-pulse rounded-full blur-3xl' />
        <div className='bg-accent/10 animate-bounce-gentle absolute right-1/4 bottom-10 h-64 w-64 rounded-full blur-3xl' />
      </div>

      {/* Floating decorative icons */}
      <div className='animate-wiggle absolute top-8 left-8'>
        <Star className='text-accent/40 h-6 w-6 fill-current' />
      </div>
      <div className='absolute top-12 right-12 animate-pulse'>
        <Sparkles className='text-primary/40 h-5 w-5' />
      </div>
      <div className='animate-bounce-gentle absolute bottom-8 left-16'>
        <Heart className='text-secondary/40 h-4 w-4 fill-current' />
      </div>

      <div className='relative z-10 mx-auto max-w-7xl'>
        <div className='mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5'>
          {/* Company info */}
          <div className='lg:col-span-3'>
            <div className='mb-6'>
              <a href='/' className='group flex items-center gap-2'>
                <div className='from-primary to-accent flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12'>
                  <Sparkles className='h-5 w-5 text-white' />
                </div>
                <span className='from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent'>
                  {companyName}
                </span>
              </a>
            </div>
            <div className='relative'>
              <p className='text-muted-foreground mb-6 max-w-md text-lg leading-relaxed'>
                {description}
              </p>
              <div className='bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm'>
                <Heart className='h-4 w-4 fill-current' />
                <span>Made with love and lots of coffee ☕</span>
              </div>
            </div>
          </div>

          {/* Links section */}
          <div className='flex w-full justify-start lg:col-span-2 lg:justify-end'>
            <div className='border-primary/20 bg-card/60 rounded-2xl border p-6 shadow-lg backdrop-blur-sm'>
              <h3 className='text-foreground mb-6 flex items-center gap-2 text-xl font-bold'>
                <Star className='text-accent h-5 w-5 fill-current' />
                Product
              </h3>
              <ul className='space-y-4'>
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      className='group text-muted-foreground hover:text-primary flex items-center gap-2 transition-all duration-200 hover:translate-x-1'
                    >
                      <div className='bg-accent/40 group-hover:bg-accent h-2 w-2 rounded-full transition-all duration-200 group-hover:scale-125' />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className='border-primary/20 flex flex-col items-center border-t pt-12 md:flex-row md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <p className='text-muted-foreground flex items-center gap-2'>
              <span>
                &copy; {currentYear} {companyName}. All rights reserved.
              </span>
              <Sparkles className='text-accent h-4 w-4 animate-pulse' />
            </p>
          </div>

          {/* Honu attribution with playful styling */}
          <a
            href='https://honu.ai'
            target='_blank'
            rel='noopener noreferrer'
            className='group mb-6 md:mb-0'
          >
            <div className='border-primary/20 bg-card/60 hover:border-primary/40 flex items-center gap-4 rounded-full border px-4 py-2 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg'>
              <p className='text-foreground text-sm font-medium'>
                Powered by Honu
              </p>
              <div className='relative'>
                <img
                  className='h-10 w-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12'
                  src='/honu-logo.svg'
                  alt='Honu Logo'
                />
                <div className='bg-accent absolute -top-1 -right-1 h-3 w-3 animate-pulse rounded-full' />
              </div>
            </div>
          </a>

          {/* Legal links */}
          <div className='flex space-x-6'>
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className='text-muted-foreground hover:text-primary decoration-primary text-sm decoration-2 underline-offset-4 transition-colors duration-200 hover:underline'
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Fun footer message */}
        <div className='mt-8 text-center'>
          <p className='text-muted-foreground flex items-center justify-center gap-2 text-sm'>
            <span>Built with</span>
            <Heart className='h-4 w-4 animate-pulse fill-current text-red-500' />
            <span>and a touch of magic</span>
            <Star className='text-accent animate-wiggle h-4 w-4 fill-current' />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
