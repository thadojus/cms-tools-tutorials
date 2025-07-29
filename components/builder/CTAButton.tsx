'use client';

import Link from 'next/link';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';

interface CTAButtonProps {
  text: string;
  url: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: 'none' | 'arrow-right' | 'download' | 'external';
}

/**
 * CTA Button Component for Builder.io
 * 
 * A highly customizable call-to-action button with multiple variants, sizes, and icons.
 * Perfect for landing pages, forms, and conversion-focused sections.
 * 
 * Features:
 * - Multiple visual variants (primary, secondary, outline)
 * - Various sizes (small, medium, large)
 * - Icon support with popular icons
 * - Full-width option for mobile layouts
 * - Accessible and keyboard-friendly
 */
export const CTAButton = ({
  text = 'Click Here',
  url = '/',
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon = 'none'
}: CTAButtonProps) => {
  // Variant styles
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-builder-primary text-white hover:bg-builder-secondary border-transparent hover:border-builder-secondary';
      case 'secondary':
        return 'bg-gray-600 text-white hover:bg-gray-700 border-transparent';
      case 'outline':
        return 'bg-transparent text-builder-primary border-builder-primary hover:bg-builder-primary hover:text-white';
      default:
        return 'bg-builder-primary text-white hover:bg-builder-secondary border-transparent';
    }
  };

  // Size styles
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'px-4 py-2 text-sm';
      case 'medium':
        return 'px-6 py-3 text-base';
      case 'large':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  // Icon component
  const renderIcon = () => {
    const iconSize = size === 'small' ? 16 : size === 'large' ? 24 : 20;
    
    switch (icon) {
      case 'arrow-right':
        return <ArrowRight size={iconSize} className="ml-2" />;
      case 'download':
        return <Download size={iconSize} className="ml-2" />;
      case 'external':
        return <ExternalLink size={iconSize} className="ml-2" />;
      default:
        return null;
    }
  };

  // Check if URL is external
  const isExternal = url.startsWith('http') || url.startsWith('//');
  
  const buttonClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-lg border-2 
    transition-all duration-200 ease-in-out
    hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-builder-primary focus:ring-offset-2
    ${getVariantClasses()}
    ${getSizeClasses()}
    ${fullWidth ? 'w-full' : ''}
  `.trim();

  // Render external link
  if (isExternal) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        {text}
        {renderIcon()}
      </a>
    );
  }

  // Render internal link
  return (
    <Link href={url} className={buttonClasses}>
      {text}
      {renderIcon()}
    </Link>
  );
};
