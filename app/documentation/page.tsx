import Link from 'next/link'
import { Book, Download, ExternalLink, Home, ArrowRight, CheckCircle, AlertCircle, Code, Terminal } from 'lucide-react'

/**
 * Documentation and Setup Guide
 * 
 * Comprehensive documentation for the Builder.io integration reference application.
 * Includes setup instructions, best practices, and troubleshooting guides.
 */
export default function DocumentationPage() {
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
              <h1 className="text-2xl font-bold text-gray-900">Documentation</h1>
            </div>
            
            <a 
              href="https://builder.io/c/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-builder-primary text-white rounded-lg hover:bg-builder-secondary transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Builder.io Docs
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-builder-primary rounded-xl flex items-center justify-center mx-auto mb-6">
            <Book className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Setup & Documentation
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete guide to setting up and using this Builder.io integration reference. 
            From installation to deployment, everything you need to know.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
                <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#quick-start" className="block text-sm text-gray-600 hover:text-builder-primary py-1">Quick Start</a>
                  <a href="#installation" className="block text-sm text-gray-600 hover:text-builder-primary py-1">Installation</a>
                  <a href="#configuration" className="block text-sm text-gray-600 hover:text-builder-primary py-1">Configuration</a>
                  <a href="#project-structure" className="block text-sm text-gray-600 hover:text-builder-primary py-1">Project Structure</a>
                  <a href="#integration-patterns" className="block text-sm text-gray-600 hover:text-builder-primary py-1">Integration Patterns</a>
                  <a href="#best-practices" className="block text-sm text-gray-600 hover:text-builder-primary py-1">Best Practices</a>
                  <a href="#troubleshooting" className="block text-sm text-gray-600 hover:text-builder-primary py-1">Troubleshooting</a>
                  <a href="#deployment" className="block text-sm text-gray-600 hover:text-builder-primary py-1">Deployment</a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Quick Start */}
              <div id="quick-start" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">⚡ Quick Start</h2>
                <p className="text-gray-600 mb-6">
                  Get up and running with Builder.io integration in under 5 minutes.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-builder-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                    <h3 className="font-semibold mb-2">Clone Repository</h3>
                    <div className="code-block text-xs">
                      git clone [repo-url]<br />
                      cd cms-tools-tutorials
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-builder-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                    <h3 className="font-semibold mb-2">Install Dependencies</h3>
                    <div className="code-block text-xs">
                      npm install
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-builder-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                    <h3 className="font-semibold mb-2">Start Development</h3>
                    <div className="code-block text-xs">
                      npm run dev
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                    <h4 className="font-semibold text-yellow-800">Important Note</h4>
                  </div>
                  <p className="text-yellow-700 text-sm">
                    You'll need a Builder.io API key to see live content. The demo uses a public key, 
                    but for production, get your own from <a href="https://builder.io" target="_blank" rel="noopener noreferrer" className="underline">builder.io</a>.
                  </p>
                </div>
              </div>

              {/* Installation */}
              <div id="installation" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">📦 Installation</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="subsection-header">Prerequisites</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                      <li>Node.js 18+ and npm/yarn</li>
                      <li>Next.js 14+ (App Router)</li>
                      <li>Builder.io account and API key</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="subsection-header">Core Dependencies</h3>
                    <pre className="code-block">
{`# Install Builder.io SDK
npm install @builder.io/sdk-react

# Install UI dependencies (already included)
npm install lucide-react tailwindcss

# Development dependencies
npm install -D @types/node @types/react typescript`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="subsection-header">Environment Setup</h3>
                    <p className="text-gray-600 mb-4">Create a <code className="bg-gray-100 px-2 py-1 rounded text-sm">.env.local</code> file:</p>
                    <pre className="code-block">
{`# Builder.io Configuration
NEXT_PUBLIC_BUILDER_API_KEY=your-api-key-here

# Optional: Private key for admin operations
BUILDER_PRIVATE_KEY=your-private-key

# Example API for demonstrations
NEXT_PUBLIC_EXAMPLE_API_URL=https://jsonplaceholder.typicode.com`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Configuration */}
              <div id="configuration" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">⚙️ Configuration</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="subsection-header">Builder.io Component Registry</h3>
                    <p className="text-gray-600 mb-4">
                      Register custom components in <code className="bg-gray-100 px-2 py-1 rounded text-sm">builder-registry.ts</code>:
                    </p>
                    <pre className="code-block">
{`import { type RegisteredComponent } from "@builder.io/sdk-react";
import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => 
  import('./components/MyComponent').then(mod => ({ default: mod.MyComponent }))
);

export const customComponents: RegisteredComponent[] = [
  {
    component: MyComponent,
    name: 'My Component',
    inputs: [
      { name: 'title', type: 'string', defaultValue: 'Hello' },
      { name: 'showIcon', type: 'boolean', defaultValue: true },
    ],
  },
];`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="subsection-header">Tailwind CSS Setup</h3>
                    <p className="text-gray-600 mb-4">Tailwind is configured with Builder.io-specific utilities:</p>
                    <pre className="code-block">
{`// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        builder: {
          primary: '#3B82F6',
          secondary: '#1E40AF',
        }
      }
    },
  },
};`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Project Structure */}
              <div id="project-structure" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">📁 Project Structure</h2>
                <p className="text-gray-600 mb-6">
                  The project is organized for scalability and maintainability:
                </p>

                <div className="bg-gray-50 rounded-lg p-6">
                  <pre className="text-sm font-mono text-gray-800">
{`├── app/
│   ├── builder-content/[[...slug]]/  # Dynamic Builder.io pages
│   ├── examples/                     # Integration examples
│   ├── documentation/               # This documentation
│   ├── globals.css                  # Global styles
│   ├── layout.tsx                   # Root layout
│   └── page.tsx                     # Homepage
├── components/
│   ├── builder/                     # Builder.io components
│   │   ├── HeroSection.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── CTAButton.tsx
│   │   ├── APIDataDisplay.tsx
│   │   └── ConditionalContent.tsx
│   └── common/                      # Shared components
├── builder-registry.ts              # Component registration
├── .env.local                       # Environment variables
└── README.md                        # Project documentation`}
                  </pre>
                </div>
              </div>

              {/* Integration Patterns */}
              <div id="integration-patterns" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">🔗 Integration Patterns</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Page Models</h3>
                    <p className="text-sm text-gray-600 mb-3">Full page content management</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Implemented</span>
                      <Link href="/examples/page-models" className="text-builder-primary text-sm">View →</Link>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Section Models</h3>
                    <p className="text-sm text-gray-600 mb-3">Reusable content blocks</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">In Progress</span>
                      <Link href="/examples/section-models" className="text-builder-primary text-sm">View →</Link>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Custom Components</h3>
                    <p className="text-sm text-gray-600 mb-3">React component integration</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Implemented</span>
                      <Link href="/examples/custom-components" className="text-builder-primary text-sm">View →</Link>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">API Integration</h3>
                    <p className="text-sm text-gray-600 mb-3">External data fetching</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Implemented</span>
                      <Link href="/examples/api-integration" className="text-builder-primary text-sm">View →</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div id="best-practices" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">✅ Best Practices</h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-3">Performance</h3>
                    <ul className="text-green-800 space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Use dynamic imports for custom components to reduce bundle size
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Implement server-side content fetching for better SEO
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Use Next.js ISR/SSG for cacheable content
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-3">Development</h3>
                    <ul className="text-blue-800 space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Always include TypeScript interfaces for component props
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Use 'use client' directive for interactive components
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Provide meaningful default values for all component inputs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Troubleshooting */}
              <div id="troubleshooting" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">🔧 Troubleshooting</h2>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Content Not Loading</h3>
                    <p className="text-sm text-gray-600 mb-2">Check these common issues:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Verify API key is correct and has proper permissions</li>
                      <li>• Ensure content is published in Builder.io</li>
                      <li>• Check URL path matches exactly in Builder.io</li>
                      <li>• Verify environment variables are loaded</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Component Registration Issues</h3>
                    <p className="text-sm text-gray-600 mb-2">Common component problems:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Components must use 'use client' directive</li>
                      <li>• Use dynamic imports in builder-registry.ts</li>
                      <li>• Check component is properly exported</li>
                      <li>• Verify TypeScript types are correct</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Build/Deployment Errors</h3>
                    <p className="text-sm text-gray-600 mb-2">Deployment checklist:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Environment variables are set on deployment platform</li>
                      <li>• All dependencies are installed</li>
                      <li>• TypeScript compilation succeeds</li>
                      <li>• No client-side only code in server components</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Deployment */}
              <div id="deployment" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">🚀 Deployment</h2>
                <p className="text-gray-600 mb-6">
                  Deploy your Builder.io integration to production platforms:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Vercel (Recommended)</h3>
                    <div className="code-block text-xs mb-3">
                      vercel --prod
                    </div>
                    <p className="text-sm text-gray-600">
                      Perfect for Next.js apps with automatic optimization and edge functions.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Netlify</h3>
                    <div className="code-block text-xs mb-3">
                      netlify deploy --prod
                    </div>
                    <p className="text-sm text-gray-600">
                      Great for static sites with form handling and edge functions.
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Environment Variables</h4>
                  <p className="text-yellow-700 text-sm">
                    Don't forget to set your environment variables in your deployment platform:
                  </p>
                  <div className="code-block text-xs mt-2">
                    NEXT_PUBLIC_BUILDER_API_KEY=your-production-key
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
