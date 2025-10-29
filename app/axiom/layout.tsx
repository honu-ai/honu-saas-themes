'use client';

import Link from 'next/link';
import { use, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useUser } from '@/lib/auth';
import { signOut } from '@/app/(login)/actions';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '@/components/axiom/nav-bar';
import { ArrowRight } from 'lucide-react';
import content from '@/content.json';
import '../../components/axiom/global.css';

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
            { label: 'Features', path: '/#benefits' },
            { label: 'How it works', path: '/#solution' },
            { label: 'FAQ', path: '/#faq' },
            ...(content?.metadata?.product
              ? [{ label: 'Pricing', path: '/pricing' }]
              : []),
          ]}
        >
          {!content.metadata.product ? (
            user ? (
              <div className='flex flex-col items-center md:flex-row'>
                <Button
                  asChild
                  className='group bg-primary text-primary-foreground relative h-12 overflow-hidden rounded-xl px-14 py-2 text-sm font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg'
                >
                  <Link href='/dashboard'>
                    Dashboard
                    <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                  </Link>
                </Button>
              </div>
            ) : (
              <div className='flex flex-col items-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-3'>
                <Button
                  asChild
                  className='h-12 rounded-xl border border-slate-300 bg-transparent px-10 py-2 text-sm font-medium text-black hover:bg-gray-100'
                >
                  <Link href='/sign-in'>Log In</Link>
                </Button>
                <Button
                  asChild
                  className='bg-primary hover:bg-primary/90 h-12 rounded-xl px-10 py-2 text-sm font-medium text-white'
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
    <section className='flex min-h-screen flex-col bg-slate-100 pt-17'>
      <Header />
      {children}
    </section>
  );
}
