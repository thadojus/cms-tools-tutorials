import Link from 'next/link'
import { ArrowRight, Book, Code, Eye, FileText, Home, ExternalLink } from 'lucide-react'

/**
 * Page Models Integration Example
 * 
 * This page demonstrates how to implement Builder.io Page Models with Next.js.
 * Page Models allow you to create and manage complete pages through Builder.io's
 * visual editor while maintaining full control over routing and SEO.
 */
export default function PageModelsExample() {
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
              <h1 className="text-2xl font-bold text-gray-900">Page Models</h1>
            </div>
            
            <Link 
              href="/builder-content"
              className="inline-flex items-center px-4 py-2 bg-builder-primary text-white rounded-lg hover:bg-builder-secondary transition-colors"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Live Example
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Book className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Page Models Integration
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn how to implement full-page content management with Builder.io Page Models. 
              Create dynamic routes, handle SEO, and provide content editors with complete control.
            </p>
          </div>

          {/* Quick Demo */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Try It Now</h2>
            <p className="text-gray-600 mb-6">
              Visit our live Builder.io content pages to see Page Models in action:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/builder-content"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-builder-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-builder-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-5 h-5 text-builder-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Homepage Content</h3>
                  <p className="text-sm text-gray-500">/builder-content</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-builder-primary group-hover:translate-x-1 transition-all" />
              </Link>
              
              <Link 
                href="/builder-content/about"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-builder-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-builder-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-5 h-5 text-builder-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">About Page</h3>
                  <p className="text-sm text-gray-500">/builder-content/about</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-builder-primary group-hover:translate-x-1 transition-all" />
              </Link>
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
              
              {/* Overview */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">What Are Page Models?</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    Page Models in Builder.io allow you to create and manage complete web pages 
                    through a visual editor. Unlike Section Models (which are components), 
                    Page Models represent entire pages with their own URLs and routing.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Key Benefits:</h4>
                    <ul className="text-blue-800 space-y-1 text-sm">
                      <li>• Full page control for content editors</li>
                      <li>• Dynamic routing with SEO optimization</li>
                      <li>• A/B testing and targeting capabilities</li>
                      <li>• Preview mode for content review</li>
                      <li>• Version control and publishing workflow</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Routing Implementation */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Dynamic Routing Setup</h2>
                <p className="text-gray-600 mb-6">
                  Builder.io Page Models work best with Next.js catch-all routes. Here's how to implement it:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="subsection-header">1. Create Catch-All Route</h3>
                    <p className="text-gray-600 mb-4">
                      Create a file at <code className="bg-gray-100 px-2 py-1 rounded text-sm">app/[[...slug]]/page.tsx</code> 
                      to handle all dynamic routes:
                    </p>
                    
                    <pre className="code-block">
{`// app/[[...slug]]/page.tsx
import { Content, fetchOneEntry } from '@builder.io/sdk-react';

export default async function Page({ params, searchParams }) {
  const urlPath = '/' + (params?.slug?.join('/') || '');
  
  const content = await fetchOneEntry({
    apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
    model: 'page',
    userAttributes: { urlPath },
    options: searchParams,
  });

  return <Content content={content} apiKey={apiKey} model="page" />;
}`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="subsection-header">2. URL Mapping</h3>
                    <p className="text-gray-600 mb-4">
                      The route handles URLs like:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-gray-50 p-4 rounded">
                        <strong>URL:</strong> <code>/</code><br />
                        <strong>Builder Path:</strong> <code>/</code>
                      </div>
                      <div className="bg-gray-50 p-4 rounded">
                        <strong>URL:</strong> <code>/about</code><br />
                        <strong>Builder Path:</strong> <code>/about</code>
                      </div>
                      <div className="bg-gray-50 p-4 rounded">
                        <strong>URL:</strong> <code>/products/shoes</code><br />
                        <strong>Builder Path:</strong> <code>/products/shoes</code>
                      </div>
                      <div className="bg-gray-50 p-4 rounded">
                        <strong>URL:</strong> <code>/blog/my-post</code><br />
                        <strong>Builder Path:</strong> <code>/blog/my-post</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Fetching */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Content Fetching & Rendering</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="subsection-header">Server-Side Fetching</h3>
                    <p className="text-gray-600 mb-4">
                      Content is fetched server-side for optimal SEO and performance:
                    </p>
                    
                    <pre className="code-block">
{`const content = await fetchOneEntry({
  apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
  model: 'page',
  userAttributes: { urlPath },
  options: searchParams, // For targeting & personalization
});`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="subsection-header">Preview Mode Support</h3>
                    <p className="text-gray-600 mb-4">
                      Handle preview and edit modes for content editors:
                    </p>
                    
                    <pre className="code-block">
{`import { isPreviewing, isEditing } from '@builder.io/sdk-react';

const canShowContent = 
  content || 
  isPreviewing(searchParams) || 
  isEditing(searchParams);

if (!canShowContent) {
  return <NotFoundPage />;
}`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* SEO & Metadata */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">SEO & Metadata</h2>
                <p className="text-gray-600 mb-6">
                  Generate dynamic metadata for each page using Builder.io content:
                </p>

                <pre className="code-block">
{`export async function generateMetadata({ params }) {
  const urlPath = '/' + (params?.slug?.join('/') || '');
  
  // Fetch content for metadata
  const content = await fetchOneEntry({
    apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
    model: 'page',
    userAttributes: { urlPath },
  });

  return {
    title: content?.data?.title || 'Default Title',
    description: content?.data?.description || 'Default Description',
    openGraph: {
      title: content?.data?.title,
      description: content?.data?.description,
      type: 'website',
    },
  };
}`}
                </pre>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Links */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a 
                    href="https://builder.io/c/docs/developers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 hover:text-builder-primary"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Builder.io Docs
                  </a>
                  <Link href="/builder-content" className="flex items-center text-sm text-gray-600 hover:text-builder-primary">
                    <Eye className="w-4 h-4 mr-2" />
                    Live Example
                  </Link>
                  <Link href="/examples/section-models" className="flex items-center text-sm text-gray-600 hover:text-builder-primary">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Section Models
                  </Link>
                </div>
              </div>

              {/* Features Checklist */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Implementation Features</h3>
                <div className="space-y-3">
                  {[
                    'Dynamic catch-all routing',
                    'Server-side content fetching',
                    'Preview mode support',
                    'SEO metadata generation',
                    '404 error handling',
                    'Custom component support'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-br from-builder-primary to-builder-secondary rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-3">Next Steps</h3>
                <p className="text-sm opacity-90 mb-4">
                  Ready to explore more Builder.io patterns?
                </p>
                <Link 
                  href="/examples/section-models"
                  className="inline-flex items-center text-sm font-medium text-white hover:text-gray-200"
                >
                  Section Models →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
