'use client';

import React, { useState } from 'react';
import { Palette, Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useThemeStyle } from '@/components/theme-style-provider/ThemeStyleProvider';

export default function ThemeSelector() {
  const { currentTheme, setTheme, availableThemes, isLoading } =
    useThemeStyle();
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) {
    return null;
  }

  const currentThemeData = availableThemes.find(
    (theme) => theme.name === currentTheme,
  );

  return (
    <div className='fixed right-6 bottom-6 z-50'>
      <div className='relative'>
        {/* Main Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className='bg-primary text-primary-foreground h-12 w-12 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl'
          aria-label='Theme Selector'
        >
          <Palette className='h-5 w-5' />
        </Button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className='bg-card border-border absolute right-0 bottom-16 w-80 space-y-2 rounded-lg border p-4 shadow-xl'>
            <div className='mb-3 flex items-center justify-between'>
              <h3 className='text-foreground text-sm font-semibold'>
                Choose Theme
              </h3>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => setIsOpen(false)}
                className='h-6 w-6 p-0'
              >
                <ChevronDown className='h-4 w-4' />
              </Button>
            </div>

            <div className='max-h-64 space-y-2 overflow-y-auto'>
              {availableThemes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => {
                    setTheme(theme.name);
                    setIsOpen(false);
                  }}
                  className={`hover:bg-accent hover:text-accent-foreground flex w-full items-center justify-between rounded-md border p-3 transition-all duration-200 ${
                    currentTheme === theme.name
                      ? 'bg-accent text-accent-foreground border-primary'
                      : 'bg-background text-foreground border-border'
                  }`}
                >
                  <div className='flex items-center space-x-3'>
                    {/* Color Preview */}
                    <div
                      className='border-border h-6 w-6 rounded-full border-2'
                      style={{ backgroundColor: theme.primaryColor }}
                    />

                    {/* Theme Info */}
                    <div className='text-left'>
                      <div className='text-sm font-medium'>
                        {theme.displayName}
                      </div>
                      <div className='text-muted-foreground text-xs'>
                        {theme.description}
                      </div>
                    </div>
                  </div>

                  {/* Check Icon */}
                  {currentTheme === theme.name && (
                    <Check className='text-primary h-4 w-4' />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

