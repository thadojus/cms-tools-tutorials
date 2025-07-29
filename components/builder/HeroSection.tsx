'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaUrl?: string;
  theme?: 'light' | 'dark';
  children?: ReactNode;
}

/**
 * Hero Section Component for Builder.io
 * 
 * A versatile hero section that can be customized through Builder.io's visual editor.
 * Supports different themes, background images, and call-to-action buttons.
 * 
 * Usage in Builder.io:
 * - Add this component to any page or section
 * - Configure title, subtitle, and CTA through the visual editor
 * - Upload background images directly in Builder.io
 * - Choose between light and dark themes
 */
export const HeroSection = ({
  title = 'Welcome to Our Platform',
  subtitle = 'Build amazing experiences with our tools',
  backgroundImage,
  ctaText = 'Get Started',
  ctaUrl = '/',
  theme = 'light',
  children
}: HeroSectionProps) => {
  const isDark = theme === 'dark';
  
  return (
    <section 
      className={`relative min-h-[500px] flex items-center justify-center ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      {backgroundImage && (
        <div className={`absolute inset-0 ${
          isDark ? 'bg-black/50' : 'bg-white/20'
        }`} />
      )}
      
      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {subtitle}
          </p>
        )}
        
        {ctaText && ctaUrl && (
          <Link
            href={ctaUrl}
            className={`inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105 ${
              isDark
                ? 'bg-white text-gray-900 hover:bg-gray-100'
                : 'bg-builder-primary text-white hover:bg-builder-secondary'
            }`}
          >
            {ctaText}
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </Link>
        )}
        
        {/* Allow for additional content */}
        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};
