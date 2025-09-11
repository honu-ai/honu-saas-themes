import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Poppins as poppinsFont } from 'next/font/google';
import { UserProvider } from '@/lib/auth';
import { getUser } from '@/lib/db/queries';
import Script from 'next/script';

import ThemeProvider from '@/components/theme-provider';
// import PostHogProvider from '@/components/posthog-provider';
import DynamicFavicon from '@/components/dynamic-favicon';
import { getBootstrapData } from '@/lib/posthog';
import { Toaster } from '@/components/ui/sonner';
import { Sparkles, Star } from 'lucide-react';

// Uncomment to enable Formbricks integration
// import FormbricksProvider from '@/components/formbricks-provider';

import content from '../content.json';

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const comfortaa = poppinsFont({
  weight: ['400', '500', '600', '700'],
  subsets: ['Poppins'],
  display: 'swap',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userPromise = getUser();
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID; // Access the GTM ID from the environment
  const bootstrap = await getBootstrapData();

  return (
    <html
      lang='en'
      className={`theme-playful ${comfortaa.className}`}
      suppressHydrationWarning
    >
      <head>
        {/* Fallback favicon */}
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <DynamicFavicon />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
        ></Script>
        <Script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      </head>
      <body className='bg-background text-foreground min-h-screen'>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {/* <PostHogProvider bootstrap={bootstrap}> */}
          <UserProvider userPromise={userPromise}>
            {/* Uncomment to enable Formbricks integration */}
            {/* <Suspense>
                <FormbricksProvider />
              </Suspense> */}

            {/* Playful navigation header */}
            <header className='border-primary/20 bg-card/60 relative border-b backdrop-blur-xl'>
              {/* Background gradient */}
              <div className='from-primary/5 via-accent/5 to-secondary/5 absolute inset-0 bg-gradient-to-r' />

              {/* Floating decorative elements */}
              <div className='absolute top-2 left-8 animate-pulse'>
                <Star className='text-accent/40 h-3 w-3 fill-current' />
              </div>
              <div className='animate-bounce-gentle absolute top-3 right-12'>
                <Sparkles className='text-primary/40 h-4 w-4' />
              </div>

              <div className='relative z-10 container mx-auto flex items-center justify-between py-4'>
                <a
                  href='/'
                  className='group flex items-center gap-2 transition-all duration-300 hover:scale-105'
                >
                  <div className='from-primary to-accent flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r transition-transform duration-300 group-hover:rotate-12'>
                    <Sparkles className='h-4 w-4 text-white' />
                  </div>
                  <span className='from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent'>
                    {content.metadata.title.toLowerCase()}
                  </span>
                </a>

                <nav className='flex gap-6 text-sm font-medium'>
                  <a
                    href='/corporate'
                    className='text-muted-foreground hover:text-foreground hover:bg-primary/10 relative rounded-full px-3 py-2 transition-all duration-200 hover:scale-105'
                  >
                    Corporate
                  </a>
                  <a
                    href='/friendly'
                    className='text-muted-foreground hover:text-foreground hover:bg-primary/10 relative rounded-full px-3 py-2 transition-all duration-200 hover:scale-105'
                  >
                    Friendly
                  </a>
                  <a
                    href='/technical'
                    className='text-muted-foreground hover:text-foreground hover:bg-primary/10 relative rounded-full px-3 py-2 transition-all duration-200 hover:scale-105'
                  >
                    Technical
                  </a>
                  <a
                    href='/playful'
                    className='text-primary bg-primary/10 border-primary/20 relative rounded-full border px-3 py-2 font-bold transition-all duration-200 hover:scale-105'
                  >
                    <span className='relative z-10'>Playful</span>
                    <div className='from-primary/20 to-accent/20 absolute inset-0 animate-pulse rounded-full bg-gradient-to-r' />
                  </a>
                  <a
                    href='/modern'
                    className='text-muted-foreground hover:text-foreground hover:bg-primary/10 relative rounded-full px-3 py-2 transition-all duration-200 hover:scale-105'
                  >
                    Modern
                  </a>
                </nav>
              </div>
            </header>

            <main className='relative'>{children}</main>
            <Toaster />
          </UserProvider>
          {/* </PostHogProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
