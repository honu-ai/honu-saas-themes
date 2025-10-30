'use client';

import { useUser } from '@/lib/auth';
import { signOut } from '@/app/(login)/actions';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '@/components/default/nav-bar';
import content from '@/content.json';
import '../../components/default/globals.css';

function Header() {
  const { userPromise } = useUser();
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
        />
      </div>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex min-h-screen flex-col pt-17'>
      <Header />
      {children}
    </section>
  );
}
