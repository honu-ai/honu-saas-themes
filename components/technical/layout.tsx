import './globals.css';
import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono as jetBrainsMonoFont } from 'next/font/google';
import { UserProvider } from '@/lib/auth';
import { getUser } from '@/lib/db/queries';
import Script from 'next/script';

import ThemeProvider from '@/components/theme-provider';
// import PostHogProvider from '@/components/posthog-provider';
import DynamicFavicon from '@/components/dynamic-favicon';
import { getBootstrapData } from '@/lib/posthog';
import { Toaster } from '@/components/ui/sonner';

// Uncomment to enable Formbricks integration
// import FormbricksProvider from '@/components/formbricks-provider';

import content from '../../content.json';

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const jetBrainsMono = jetBrainsMonoFont({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
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
      className={`theme-technical ${jetBrainsMono.className}`}
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
            <header className='bg-card/60 border-b backdrop-blur-md'>
              <div className='container mx-auto flex items-center justify-between py-3'>
                <a
                  href='/'
                  className='hover:text-primary font-mono text-sm transition-colors'
                >
                  {content.metadata.title.toLowerCase()}
                </a>
                <nav className='flex gap-4 font-mono text-xs'>
                  <a
                    href='/corporate'
                    className='text-muted-foreground hover:text-foreground focus-ring rounded-sm px-1 transition-colors'
                  >
                    Corporate
                  </a>
                  <a
                    href='/friendly'
                    className='text-muted-foreground hover:text-foreground focus-ring rounded-sm px-1 transition-colors'
                  >
                    Friendly
                  </a>
                  <a href='/technical' className='text-primary font-semibold'>
                    Technical
                  </a>
                  <a
                    href='/playful'
                    className='text-muted-foreground hover:text-foreground focus-ring rounded-sm px-1 transition-colors'
                  >
                    Playful
                  </a>
                  <a
                    href='/modern'
                    className='text-muted-foreground hover:text-foreground focus-ring rounded-sm px-1 transition-colors'
                  >
                    Modern
                  </a>
                </nav>
              </div>
            </header>
            <main>{children}</main>
            <Toaster />
          </UserProvider>
          {/* </PostHogProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
