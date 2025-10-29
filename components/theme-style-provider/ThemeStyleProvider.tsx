'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {
  THEME_REGISTRY,
  getTheme,
  getDefaultTheme,
  type ThemeDefinition,
} from '@/lib/themes/theme-registry';

interface ThemeStyleContextType {
  currentTheme: string;
  setTheme: (themeName: string) => void;
  availableThemes: ThemeDefinition[];
  isLoading: boolean;
}

const ThemeStyleContext = createContext<ThemeStyleContextType | undefined>(
  undefined,
);

export const useThemeStyle = () => {
  const context = useContext(ThemeStyleContext);
  if (context === undefined) {
    throw new Error('useThemeStyle must be used within a ThemeStyleProvider');
  }
  return context;
};

interface ThemeStyleProviderProps {
  children: ReactNode;
}

export default function ThemeStyleProvider({
  children,
}: ThemeStyleProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<string>('default');
  const [isLoading, setIsLoading] = useState(true);

  const availableThemes = Object.values(THEME_REGISTRY);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('user-selected-theme');
    const themeToUse =
      savedTheme && THEME_REGISTRY[savedTheme] ? savedTheme : getDefaultTheme();
    setCurrentTheme(themeToUse);
    setIsLoading(false);
  }, []);

  // Apply theme CSS variables
  useEffect(() => {
    if (isLoading) return;

    const theme = getTheme(currentTheme);
    if (!theme) return;

    // Remove any existing dynamic theme styles
    const existingStyle = document.getElementById('dynamic-theme-styles');
    if (existingStyle) {
      existingStyle.remove();
    }

    // Create new style element
    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-theme-styles';

    // Build CSS with light and dark theme variables
    let css = ':root {\n';
    Object.entries(theme.variables.light).forEach(([key, value]) => {
      css += `  ${key}: ${value};\n`;
    });
    css += '}\n\n.dark {\n';
    Object.entries(theme.variables.dark).forEach(([key, value]) => {
      css += `  ${key}: ${value};\n`;
    });
    css += '}';

    styleElement.textContent = css;
    document.head.appendChild(styleElement);

    // Apply theme class to document element for theme-specific styling
    const themeClass = `theme-${currentTheme}`;
    document.documentElement.classList.add(themeClass);

    // Cleanup function
    return () => {
      document.documentElement.classList.remove(themeClass);
    };
  }, [currentTheme, isLoading]);

  const setTheme = (themeName: string) => {
    if (THEME_REGISTRY[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem('user-selected-theme', themeName);
    }
  };

  const value: ThemeStyleContextType = {
    currentTheme,
    setTheme,
    availableThemes,
    isLoading,
  };

  return (
    <ThemeStyleContext.Provider value={value}>
      {children}
    </ThemeStyleContext.Provider>
  );
}

