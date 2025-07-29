import Link from 'next/link'
import { ArrowRight, Code, Eye, FileText, Home, ExternalLink } from 'lucide-react'

/**
 * Section Models Integration Example
 * 
 * This page demonstrates how to implement Builder.io Section Models with Next.js.
 * Section Models allow you to create reusable content blocks that can be embedded
 * within existing pages while maintaining the page's existing structure.
 */
export default function SectionModelsExample() {
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
              <h1 className="text-2xl font-bold text-gray-900">Section Models</h1>
            </div>
            
            <Link 
              href="/examples"
              className="inline-flex items-center px-4 py-2 bg-builder-primary text-white rounded-lg hover:bg-builder-secondary transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              More Examples
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Section Models Integration
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn how to create reusable content blocks with Builder.io Section Models. 
              Embed dynamic sections within existing pages without rebuilding your entire site.
            </p>
          </div>

          {/* Demo Examples */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">How Section Models Work</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Before (Static Content)</h3>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-20 bg-gray-300 rounded"></div>
                    <div className="text-xs text-gray-500 text-center">Static testimonials hardcoded in React</div>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">After (Dynamic Sections)</h3>
                <div className="bg-builder-primary/10 border-2 border-builder-primary border-dashed rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="h-4 bg-builder-primary/30 rounded w-3/4"></div>
                    <div className="h-4 bg-builder-primary/30 rounded w-1/2"></div>
                    <div className="h-20 bg-builder-primary/30 rounded"></div>
                    <div className="text-xs text-builder-primary text-center">Dynamic testimonials from Builder.io</div>
                  </div>
                </div>
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
              
              {/* What are Section Models */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">What Are Section Models?</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    Section Models are reusable content blocks that can be embedded within existing pages. 
                    Unlike Page Models (which control entire pages), Section Models let you add dynamic 
                    content to specific parts of your existing React components.
                  </p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-green-900 mb-2">Perfect For:</h4>
                    <ul className="text-green-800 space-y-1 text-sm">
                      <li>• Testimonials sections on existing pages</li>
                      <li>• Dynamic banners and announcements</li>
                      <li>• Feature highlights and product showcases</li>
                      <li>• Blog post content within static layouts</li>
                      <li>• Marketing sections that change frequently</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Implementation */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Implementation Example</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="subsection-header">1. Embed Section in Your Page</h3>
                    <p className="text-gray-600 mb-4">
                      Add a Builder.io section to any existing React component:
                    </p>
                    
                    <pre className="code-block">
{`// pages/about.tsx - Your existing About page
import { RenderBuilderContent } from '@/components/BuilderSection';

export default function AboutPage() {
  return (
    <div>
      <h1>About Our Company</h1>
      <p>Founded in 2020...</p>
      
      {/* Dynamic testimonials section */}
      <RenderBuilderContent model="section" content="testimonials" />
      
      <h2>Our Team</h2>
      <p>We have amazing people...</p>
    </div>
  );
}`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="subsection-header">2. Create the Section Component</h3>
                    <p className="text-gray-600 mb-4">
                      Build a reusable component to fetch and render sections:
                    </p>
                    
                    <pre className="code-block">
{`// components/BuilderSection.tsx
import { builder } from '@builder.io/sdk-react';

interface Props {
  model: string;
  content: string;
}

export async function RenderBuilderContent({ model, content }: Props) {
  const builderContent = await builder
    .get(model, { 
      userAttributes: { content } 
    })
    .toPromise();

  return (
    <BuilderComponent 
      model={model} 
      content={builderContent} 
    />
  );
}`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="subsection-header">3. Content Management</h3>
                    <p className="text-gray-600 mb-4">
                      Content editors can now manage sections independently:
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <ul className="text-blue-800 space-y-2 text-sm">
                        <li>• Create "testimonials" section in Builder.io</li>
                        <li>• Add testimonial components with customer data</li>
                        <li>• Publish changes without developer involvement</li>
                        <li>• A/B test different testimonial layouts</li>
                        <li>• Schedule content updates and promotions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Common Use Cases</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-green-700">🎯 Marketing Sections</h3>
                    <p className="text-sm text-gray-600 mb-3">Dynamic banners, promotions, and feature highlights</p>
                    <div className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">High Impact</div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-blue-700">👥 Social Proof</h3>
                    <p className="text-sm text-gray-600 mb-3">Testimonials, reviews, and customer stories</p>
                    <div className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Easy Updates</div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-purple-700">📝 Content Blocks</h3>
                    <p className="text-sm text-gray-600 mb-3">Rich text, images, and multimedia content</p>
                    <div className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">Flexible</div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-orange-700">🛍️ Product Features</h3>
                    <p className="text-sm text-gray-600 mb-3">Product showcases and feature comparisons</p>
                    <div className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded">Dynamic</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Links */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a 
                    href="https://builder.io/c/docs/sections"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 hover:text-builder-primary"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Section Models Docs
                  </a>
                  <Link href="/examples/page-models" className="flex items-center text-sm text-gray-600 hover:text-builder-primary">
                    <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                    Page Models
                  </Link>
                  <Link href="/examples/custom-components" className="flex items-center text-sm text-gray-600 hover:text-builder-primary">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Custom Components
                  </Link>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  {[
                    'Keep existing page structure',
                    'Content editor independence',
                    'A/B testing capabilities',
                    'Easy content updates',
                    'Reusable across pages',
                    'SEO-friendly implementation'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-3">Next Steps</h3>
                <p className="text-sm opacity-90 mb-4">
                  Ready to add interactive components?
                </p>
                <Link 
                  href="/examples/custom-components"
                  className="inline-flex items-center text-sm font-medium text-white hover:text-gray-200"
                >
                  Custom Components →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
