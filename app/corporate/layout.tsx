'use client';

import Link from 'next/link';
import { use, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useUser } from '@/lib/auth';
import { signOut } from '@/app/(login)/actions';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/nav-bar';
import UserAvatarMenu from '@/components/user-avatar-menu';
import content from '@/content.json';
import '../../components/corporate/globals.css';

// Import Inter font for corporate theme
import { Inter } from 'next/font/google';

const corporateFont = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

function Header() {
  const { userPromise } = useUser();
  const user = use(userPromise);
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.refresh();
    router.push('/');
  }

  return (
    <header>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Navbar
          links={[
            { label: 'Features', path: '/#benefits' },
            { label: 'How it works', path: '/#solution' },
            { label: 'FAQ', path: '/#faq' },
            ...(content?.metadata?.product
              ? [{ label: 'Pricing', path: '/pricing' }]
              : []),
          ]}
        >
          {content.metadata.product ? (
            user ? (
              <UserAvatarMenu user={user} handleSignOut={handleSignOut} />
            ) : (
              <div className='flex items-center space-x-3'>
                <Button
                  asChild
                  className='rounded-full border border-black bg-transparent px-5 py-2 text-sm font-medium text-black hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-gray-800'
                >
                  <Link href='/sign-in'>Log In</Link>
                </Button>
                <Button
                  asChild
                  className='rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800'
                >
                  <Link href='/sign-up'>Sign Up</Link>
                </Button>
              </div>
            )
          ) : null}
        </Navbar>
      </div>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Apply corporate font class to document
    document.documentElement.classList.add(corporateFont.className);
    document.documentElement.classList.add('corporate-theme');

    return () => {
      // Clean up when leaving corporate theme
      document.documentElement.classList.remove(corporateFont.className);
      document.documentElement.classList.remove('corporate-theme');
    };
  }, []);

  return (
    <section className='flex min-h-screen flex-col pt-17'>
      <Header />
      {children}
    </section>
  );
}
