'use client';

import Link from 'next/link';
import { use, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useUser } from '@/lib/auth';
import { signOut } from '@/app/(login)/actions';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '@/components/nav-bar';
import UserAvatarMenu from '@/components/user-avatar-menu';
import content from '@/content.json';
import '../../components/technical/globals.css';

// Import montserrat font for friendly theme (keeping it consistent with design)
import { JetBrains_Mono as jetBrainsMonoFont } from 'next/font/google';

const jetBrainsMono = jetBrainsMonoFont({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

function Header() {
  const { userPromise } = useUser();
  const user = use(userPromise);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageContent = searchParams.get('pageContent');
  let pageData = content;

  if (pageContent) {
    const params = { pageContent };
    try {
      // First try to decode the URI component, with fallback if it's already decoded
      let decodedContent: string;
      try {
        decodedContent = decodeURIComponent(params.pageContent);
      } catch (uriError) {
        decodedContent = params.pageContent;
      }

      // Parse the JSON content
      const customContent = JSON.parse(decodedContent);

      // Use custom content but always preserve privacy policy and terms from local content
      pageData = {
        ...customContent,
        privacy_policy: content.privacy_policy,
        terms_of_service: content.terms_of_service,
      } as typeof content;
    } catch (error) {
      console.error('Failed to parse pageContent parameter:', error);
      // Fall back to default content if parsing fails
      pageData = content;
    }
  }

  async function handleSignOut() {
    await signOut();
    router.refresh();
    router.push('/');
  }

  return (
    <header>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Navbar
          brandName={pageData.metadata.brandName}
          links={[
            { label: 'Features', path: '/technical/#benefits' },
            { label: 'How it works', path: '/technical/#solution' },
            { label: 'FAQ', path: '/technical/#faq' },
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
    // Apply friendly font class to document
    document.documentElement.classList.add(jetBrainsMono.className);
    document.documentElement.classList.add('theme-technical');

    return () => {
      // Clean up when leaving friendly theme
      document.documentElement.classList.remove(jetBrainsMono.className);
      document.documentElement.classList.remove('theme-technical');
    };
  }, []);

  return (
    <section className='flex min-h-screen flex-col pt-17'>
      <Header />
      {children}
    </section>
  );
}
