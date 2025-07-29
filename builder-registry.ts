import { type RegisteredComponent } from "@builder.io/sdk-react";
import dynamic from 'next/dynamic';

// Dynamically import custom components for Builder.io
// This ensures proper client-side rendering and reduces bundle size

const HeroSection = dynamic(() => 
  import('./components/builder/HeroSection').then(mod => ({ default: mod.HeroSection }))
);

const TestimonialCard = dynamic(() => 
  import('./components/builder/TestimonialCard').then(mod => ({ default: mod.TestimonialCard }))
);

const ProductShowcase = dynamic(() => 
  import('./components/builder/ProductShowcase').then(mod => ({ default: mod.ProductShowcase }))
);

const CTAButton = dynamic(() => 
  import('./components/builder/CTAButton').then(mod => ({ default: mod.CTAButton }))
);

const APIDataDisplay = dynamic(() => 
  import('./components/builder/APIDataDisplay').then(mod => ({ default: mod.APIDataDisplay }))
);

const ConditionalContent = dynamic(() => 
  import('./components/builder/ConditionalContent').then(mod => ({ default: mod.ConditionalContent }))
);

/**
 * Registry of custom components available in Builder.io visual editor
 * Each component includes:
 * - component: The React component to render
 * - name: Display name in Builder.io editor
 * - inputs: Configurable props in the visual editor
 * - Additional metadata like canHaveChildren, tags, etc.
 */
export const customComponents: RegisteredComponent[] = [
  {
    component: HeroSection,
    name: 'Hero Section',
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Welcome to Our Platform',
        required: true,
        helperText: 'Main headline for the hero section'
      },
      {
        name: 'subtitle',
        type: 'string',
        defaultValue: 'Build amazing experiences with our tools',
        helperText: 'Supporting text below the title'
      },
      {
        name: 'backgroundImage',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
        helperText: 'Background image for the hero section'
      },
      {
        name: 'ctaText',
        type: 'string',
        defaultValue: 'Get Started',
      },
      {
        name: 'ctaUrl',
        type: 'url',
        defaultValue: '/get-started',
      },
      {
        name: 'theme',
        type: 'string',
        enum: ['light', 'dark'],
        defaultValue: 'light',
      }
    ],
    canHaveChildren: false,
  },
  {
    component: TestimonialCard,
    name: 'Testimonial Card',
    inputs: [
      {
        name: 'quote',
        type: 'longText',
        defaultValue: 'This product has transformed our business.',
        required: true,
      },
      {
        name: 'author',
        type: 'string',
        defaultValue: 'John Doe',
        required: true,
      },
      {
        name: 'position',
        type: 'string',
        defaultValue: 'CEO, Company Inc.',
      },
      {
        name: 'avatar',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png'],
      },
      {
        name: 'rating',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'showRating',
        type: 'boolean',
        defaultValue: true,
      }
    ],
    canHaveChildren: false,
  },
  {
    component: ProductShowcase,
    name: 'Product Showcase',
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Featured Products',
      },
      {
        name: 'apiEndpoint',
        type: 'url',
        defaultValue: 'https://jsonplaceholder.typicode.com/posts',
        helperText: 'API endpoint to fetch product data'
      },
      {
        name: 'itemsToShow',
        type: 'number',
        defaultValue: 3,
        min: 1,
        max: 10,
      },
      {
        name: 'layout',
        type: 'string',
        enum: ['grid', 'carousel', 'list'],
        defaultValue: 'grid',
      }
    ],
    canHaveChildren: false,
  },
  {
    component: CTAButton,
    name: 'CTA Button',
    inputs: [
      {
        name: 'text',
        type: 'string',
        defaultValue: 'Click Here',
        required: true,
      },
      {
        name: 'url',
        type: 'url',
        defaultValue: '/',
        required: true,
      },
      {
        name: 'variant',
        type: 'string',
        enum: ['primary', 'secondary', 'outline'],
        defaultValue: 'primary',
      },
      {
        name: 'size',
        type: 'string',
        enum: ['small', 'medium', 'large'],
        defaultValue: 'medium',
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'icon',
        type: 'string',
        enum: ['none', 'arrow-right', 'download', 'external'],
        defaultValue: 'none',
      }
    ],
    canHaveChildren: false,
  },
  {
    component: APIDataDisplay,
    name: 'API Data Display',
    inputs: [
      {
        name: 'apiUrl',
        type: 'url',
        defaultValue: 'https://jsonplaceholder.typicode.com/users',
        required: true,
      },
      {
        name: 'title',
        type: 'string',
        defaultValue: 'API Data',
      },
      {
        name: 'displayFormat',
        type: 'string',
        enum: ['cards', 'table', 'list'],
        defaultValue: 'cards',
      },
      {
        name: 'maxItems',
        type: 'number',
        defaultValue: 5,
      }
    ],
    canHaveChildren: false,
  },
  {
    component: ConditionalContent,
    name: 'Conditional Content',
    inputs: [
      {
        name: 'showForLoggedIn',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'showForAnonymous',
        type: 'boolean',
        defaultValue: true,
      },
      {
        name: 'requiredRole',
        type: 'string',
        defaultValue: '',
      }
    ],
    canHaveChildren: true,
  },
];
