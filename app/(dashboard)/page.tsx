import { Button } from '@/components/ui/button';
import { Database, Eye, Palette, Building2 } from 'lucide-react';
import Link from 'next/link';

export default async function HomePage() {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <section className='py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white'>
              Choose Your Template Style
            </h1>
            <p className='mt-6 text-xl leading-8 text-gray-600 dark:text-gray-400'>
              Explore different design variations of our SaaS template. Each
              style offers the same powerful features with unique aesthetics.
            </p>
          </div>
          <div className='mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {/* Classic Template */}
            <div className='relative overflow-hidden rounded-3xl bg-gray-50 p-8 ring-1 shadow-lg ring-gray-200 dark:bg-gray-900 dark:ring-gray-800'>
              <div className='flex items-center gap-x-4'>
                <div className='rounded-lg bg-blue-600 p-2'>
                  <Database className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Classic Template
                </h3>
              </div>
              <p className='mt-4 text-gray-600 dark:text-gray-400'>
                Clean, professional design with comprehensive sections including
                terminal demo, features overview, and detailed problem-solution
                flow.
              </p>
              <div className='mt-6 flex items-center gap-x-3'>
                <Button
                  asChild
                  className='bg-blue-600 text-white hover:bg-blue-700'
                >
                  <Link href='/dashboard'>
                    <Eye className='mr-2 h-4 w-4' />
                    View Template
                  </Link>
                </Button>
              </div>
              <div className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                ✓ Terminal Demo ✓ Complete Sections ✓ Product Features
              </div>
            </div>

            {/* Modern Template */}
            <div className='relative overflow-hidden rounded-3xl bg-gray-50 p-8 ring-1 shadow-lg ring-gray-200 dark:bg-gray-900 dark:ring-gray-800'>
              <div className='flex items-center gap-x-4'>
                <div className='rounded-lg bg-purple-600 p-2'>
                  <Palette className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Modern Template
                </h3>
              </div>
              <p className='mt-4 text-gray-600 dark:text-gray-400'>
                Streamlined, contemporary design focusing on clean aesthetics
                and essential content sections with modern UI patterns.
              </p>
              <div className='mt-6 flex items-center gap-x-3'>
                <Button
                  asChild
                  className='bg-purple-600 text-white hover:bg-purple-700'
                >
                  <Link href='/modern'>
                    <Eye className='mr-2 h-4 w-4' />
                    View Template
                  </Link>
                </Button>
              </div>
              <div className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                ✓ Minimalist Design ✓ Core Sections ✓ Fast Loading
              </div>
            </div>

            {/* Corporate Template */}
            <div className='relative overflow-hidden rounded-3xl bg-gray-50 p-8 ring-1 shadow-lg ring-gray-200 dark:bg-gray-900 dark:ring-gray-800'>
              <div className='flex items-center gap-x-4'>
                <div className='rounded-lg bg-slate-600 p-2'>
                  <Building2 className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Corporate Template
                </h3>
              </div>
              <p className='mt-4 text-gray-600 dark:text-gray-400'>
                Professional business design with structured layouts, clear
                hierarchy, and corporate-friendly styling perfect for B2B
                applications.
              </p>
              <div className='mt-6 flex items-center gap-x-3'>
                <Button
                  asChild
                  className='bg-slate-600 text-white hover:bg-slate-700'
                >
                  <Link href='/corporate'>
                    <Eye className='mr-2 h-4 w-4' />
                    View Template
                  </Link>
                </Button>
              </div>
              <div className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                ✓ Professional Layout ✓ Business-Focused ✓ Structured Design
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
