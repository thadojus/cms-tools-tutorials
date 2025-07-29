import Link from 'next/link'
import { ArrowRight, Zap, Eye, Code, Home, ExternalLink } from 'lucide-react'

/**
 * Custom Components Integration Example
 * 
 * This page demonstrates how to register and use custom React components
 * within Builder.io's visual editor. Custom components bridge the gap
 * between developer functionality and content editor flexibility.
 */
export default function CustomComponentsExample() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-builder-primary mr-6">
                <Home className="w-5 h-5 mr-2" />
                Home
              </Link>
              <Link href="/examples" className="flex items-center text-gray-600 hover:text-builder-primary mr-6">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Examples
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Custom Components</h1>
            </div>
            
            <Link 
              href="/builder-content"
              className="inline-flex items-center px-4 py-2 bg-builder-primary text-white rounded-lg hover:bg-builder-secondary transition-colors"
            >
              <Eye className="w-4 h-4 mr-2" />
              See Components Live
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Custom Components
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Register your React components in Builder.io's visual editor. Give content 
              creators access to your custom functionality with an intuitive interface.
            </p>
          </div>

          {/* Live Examples */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Available Custom Components</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-blue-600 font-bold text-sm">H</span>
                </div>
                <h3 className="font-semibold mb-2">Hero Section</h3>
                <p className="text-sm text-gray-600 mb-3">Customizable hero sections with themes, backgrounds, and CTAs</p>
                <div className="text-xs text-gray-500">Title, Subtitle, Background, CTA</div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-green-600 font-bold text-sm">T</span>
                </div>
                <h3 className="font-semibold mb-2">Testimonial Card</h3>
                <p className="text-sm text-gray-600 mb-3">Customer testimonials with ratings and avatars</p>
                <div className="text-xs text-gray-500">Quote, Author, Rating, Avatar</div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-orange-600 font-bold text-sm">A</span>
                </div>
                <h3 className="font-semibold mb-2">API Data Display</h3>
                <p className="text-sm text-gray-600 mb-3">Fetch and display external API data dynamically</p>
                <div className="text-xs text-gray-500">API URL, Format, Max Items</div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-purple-600 font-bold text-sm">B</span>
                </div>
                <h3 className="font-semibold mb-2">CTA Button</h3>
                <p className="text-sm text-gray-600 mb-3">Call-to-action buttons with variants and icons</p>
                <div className="text-xs text-gray-500">Text, URL, Variant, Size, Icon</div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-red-600 font-bold text-sm">C</span>
                </div>
                <h3 className="font-semibold mb-2">Conditional Content</h3>
                <p className="text-sm text-gray-600 mb-3">Show/hide content based on user authentication</p>
                <div className="text-xs text-gray-500">Auth Status, User Role</div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-teal-600 font-bold text-sm">P</span>
                </div>
                <h3 className="font-semibold mb-2">Product Showcase</h3>
                <p className="text-sm text-gray-600 mb-3">Display products from APIs with multiple layouts</p>
                <div className="text-xs text-gray-500">API Endpoint, Layout, Item Count</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Component Creation */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Creating Custom Components</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="subsection-header">1. Build Your React Component</h3>
                    <p className="text-gray-600 mb-4">
                      Create a React component with props that content editors can configure:
                    </p>
                    
                    <pre className="code-block">
{`// components/builder/CustomButton.tsx
'use client';

interface CustomButtonProps {
  text: string;
  url: string;
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  icon?: string;
}

export const CustomButton = ({
  text = 'Click Here',
  url = '/',
  variant = 'primary',
  size = 'medium',
  icon
}: CustomButtonProps) => {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700'
  };

  return (
    <a
      href={url}
      className={\`inline-flex items-center rounded-lg transition-colors \${sizeClasses[size]} \${variantClasses[variant]}\`}
    >
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </a>
  );
};`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="subsection-header">2. Register in Builder.io</h3>
                    <p className="text-gray-600 mb-4">
                      Add your component to the Builder.io registry with input configurations:
                    </p>
                    
                    <pre className="code-block">
{`// builder-registry.ts
import { type RegisteredComponent } from "@builder.io/sdk-react";
import dynamic from 'next/dynamic';

const CustomButton = dynamic(() => 
  import('./components/builder/CustomButton').then(mod => ({ 
    default: mod.CustomButton 
  }))
);

export const customComponents: RegisteredComponent[] = [
  {
    component: CustomButton,
    name: 'Custom Button',
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
        enum: ['primary', 'secondary'],
        defaultValue: 'primary',
      },
      {
        name: 'size',
        type: 'string',
        enum: ['small', 'medium', 'large'],
        defaultValue: 'medium',
      },
      {
        name: 'icon',
        type: 'string',
        defaultValue: '',
      }
    ],
    canHaveChildren: false,
  },
];`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Input Types */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Available Input Types</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Text Inputs</h3>
                      <div className="space-y-2 text-sm">
                        <div><code className="bg-gray-100 px-2 py-1 rounded">string</code> - Single line text</div>
                        <div><code className="bg-gray-100 px-2 py-1 rounded">longText</code> - Multi-line text</div>
                        <div><code className="bg-gray-100 px-2 py-1 rounded">richText</code> - Rich text editor</div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Selection</h3>
                      <div className="space-y-2 text-sm">
                        <div><code className="bg-gray-100 px-2 py-1 rounded">boolean</code> - True/false toggle</div>
                        <div><code className="bg-gray-100 px-2 py-1 rounded">enum</code> - Dropdown selection</div>
                        <div><code className="bg-gray-100 px-2 py-1 rounded">radio</code> - Radio buttons</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Media & Data</h3>
                      <div className="space-y-2 text-sm">
                        <div><code className="bg-gray-100 px-2 py-1 rounded">file</code> - Image/file upload</div>
                        <div><code className="bg-gray-100 px-2 py-1 rounded">url</code> - URL input with validation</div>
                        <div><code className="bg-gray-100 px-2 py-1 rounded">color</code> - Color picker</div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Numbers & Dates</h3>
                      <div className="space-y-2 text-sm">
                        <div><code className="bg-gray-100 px-2 py-1 rounded">number</code> - Numeric input</div>
                        <div><code className="bg-gray-100 px-2 py-1 rounded">date</code> - Date picker</div>
                        <div><code className="bg-gray-100 px-2 py-1 rounded">dateTime</code> - Date & time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Best Practices</h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-3">✅ Do This</h3>
                    <ul className="text-green-800 space-y-2 text-sm">
                      <li>• Use 'use client' directive for interactive components</li>
                      <li>• Provide meaningful default values for all inputs</li>
                      <li>• Use TypeScript interfaces for better development experience</li>
                      <li>• Add helper text to explain complex inputs</li>
                      <li>• Use dynamic imports in the registry for better performance</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="font-semibold text-red-900 mb-3">❌ Avoid This</h3>
                    <ul className="text-red-800 space-y-2 text-sm">
                      <li>• Don't use client-only APIs in server components</li>
                      <li>• Avoid complex nested object inputs (use multiple simple inputs)</li>
                      <li>• Don't forget to export components properly</li>
                      <li>• Avoid making too many inputs required</li>
                      <li>• Don't use external dependencies without proper imports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link 
                    href="/builder-content"
                    className="flex items-center text-sm text-gray-600 hover:text-builder-primary"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    See Components Live
                  </Link>
                  <a 
                    href="https://builder.io/c/docs/custom-components"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 hover:text-builder-primary"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Component Docs
                  </a>
                  <Link href="/examples/api-integration" className="flex items-center text-sm text-gray-600 hover:text-builder-primary">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    API Integration
                  </Link>
                </div>
              </div>

              {/* Component Checklist */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Component Checklist</h3>
                <div className="space-y-3">
                  {[
                    "'use client' directive",
                    'TypeScript interfaces',
                    'Default prop values',
                    'Dynamic import registration',
                    'Input type definitions',
                    'Responsive design'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-3">Next Steps</h3>
                <p className="text-sm opacity-90 mb-4">
                  Learn about API data integration
                </p>
                <Link 
                  href="/examples/api-integration"
                  className="inline-flex items-center text-sm font-medium text-white hover:text-gray-200"
                >
                  API Integration →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
