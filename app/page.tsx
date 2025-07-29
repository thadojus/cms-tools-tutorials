import Link from 'next/link'
import { ArrowRight, Book, Code, Zap, Shield, Globe, Users } from 'lucide-react'

/**
 * Homepage for Builder.io Integration Reference
 * 
 * This page serves as the main entry point for the comprehensive Builder.io 
 * integration guide and reference application. It provides developers with 
 * organized access to all integration patterns, examples, and documentation.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-builder-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">Builder.io Reference</h1>
                <p className="text-sm text-gray-600">Integration Guide & Examples</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/examples" className="nav-link">Examples</Link>
              <Link href="/documentation" className="nav-link">Docs</Link>
              <Link href="/builder-content" className="nav-link">Live Content</Link>
              <a 
                href="https://builder.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link"
              >
                Builder.io ↗
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Complete Builder.io
            <span className="text-builder-primary block">Integration Reference</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            A comprehensive developer guide with real-world examples, patterns, and best practices 
            for integrating Builder.io with Next.js. From basic setup to advanced use cases.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/examples"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-builder-primary rounded-lg hover:bg-builder-secondary transition-all hover:scale-105"
            >
              Explore Examples
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <Link 
              href="/builder-content"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-builder-primary bg-white border-2 border-builder-primary rounded-lg hover:bg-builder-primary hover:text-white transition-all"
            >
              View Live Content
              <Globe className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Master Builder.io
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From basic integration to advanced patterns, this reference covers all aspects 
              of working with Builder.io in production applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Page Models */}
            <div className="example-card group hover:border-builder-primary">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-builder-primary transition-colors">
                <Book className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Page Models</h3>
              <p className="text-gray-600 mb-4">
                Full-page content management with dynamic routing, SEO optimization, and catch-all routes.
              </p>
              <Link href="/examples/page-models" className="text-builder-primary font-medium inline-flex items-center">
                View Examples <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Section Models */}
            <div className="example-card group hover:border-builder-primary">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-builder-primary transition-colors">
                <Code className="w-6 h-6 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Section Models</h3>
              <p className="text-gray-600 mb-4">
                Reusable content blocks, component integration, and embedding sections within existing pages.
              </p>
              <Link href="/examples/section-models" className="text-builder-primary font-medium inline-flex items-center">
                View Examples <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Custom Components */}
            <div className="example-card group hover:border-builder-primary">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-builder-primary transition-colors">
                <Zap className="w-6 h-6 text-purple-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Components</h3>
              <p className="text-gray-600 mb-4">
                Register React components, handle props, and create interactive elements within Builder.io.
              </p>
              <Link href="/examples/custom-components" className="text-builder-primary font-medium inline-flex items-center">
                View Examples <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* API Integration */}
            <div className="example-card group hover:border-builder-primary">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-builder-primary transition-colors">
                <Globe className="w-6 h-6 text-orange-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">API Integration</h3>
              <p className="text-gray-600 mb-4">
                Fetch external data, integrate with third-party APIs, and display dynamic content.
              </p>
              <Link href="/examples/api-integration" className="text-builder-primary font-medium inline-flex items-center">
                View Examples <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Authentication */}
            <div className="example-card group hover:border-builder-primary">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-builder-primary transition-colors">
                <Shield className="w-6 h-6 text-red-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Authentication</h3>
              <p className="text-gray-600 mb-4">
                Show/hide content based on user status, role-based access, and personalization.
              </p>
              <Link href="/examples/authentication" className="text-builder-primary font-medium inline-flex items-center">
                View Examples <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Performance & Caching */}
            <div className="example-card group hover:border-builder-primary">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-builder-primary transition-colors">
                <Users className="w-6 h-6 text-teal-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance & Caching</h3>
              <p className="text-gray-600 mb-4">
                ISR, SSG, SSR strategies, cache invalidation with webhooks, and optimization techniques.
              </p>
              <Link href="/examples/performance" className="text-builder-primary font-medium inline-flex items-center">
                View Examples <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Start Guide
            </h2>
            <p className="text-lg text-gray-600">
              Get up and running with Builder.io in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-builder-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Install SDK</h3>
              <code className="code-block text-xs">
                npm install @builder.io/sdk-react
              </code>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-builder-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Set API Key</h3>
              <code className="code-block text-xs">
                NEXT_PUBLIC_BUILDER_API_KEY=your-key
              </code>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-builder-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Create Content</h3>
              <p className="text-sm text-gray-600">
                Use Builder.io's visual editor to create and manage content
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/documentation/getting-started"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-builder-primary rounded-lg hover:bg-builder-secondary transition-colors"
            >
              Full Setup Guide
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-builder-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">B</span>
                </div>
                <span className="ml-2 text-lg font-semibold">Builder.io Reference</span>
              </div>
              <p className="text-gray-400 max-w-md">
                A comprehensive developer resource for mastering Builder.io integration 
                with Next.js. Created by developers, for developers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Examples</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/examples/page-models" className="hover:text-white">Page Models</Link></li>
                <li><Link href="/examples/section-models" className="hover:text-white">Section Models</Link></li>
                <li><Link href="/examples/custom-components" className="hover:text-white">Custom Components</Link></li>
                <li><Link href="/examples/api-integration" className="hover:text-white">API Integration</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://builder.io/c/docs" target="_blank" rel="noopener noreferrer" className="hover:text-white">Official Docs</a></li>
                <li><a href="https://github.com/BuilderIO" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
                <li><a href="https://builder.io/c/blueprints" target="_blank" rel="noopener noreferrer" className="hover:text-white">Templates</a></li>
                <li><a href="https://forum.builder.io" target="_blank" rel="noopener noreferrer" className="hover:text-white">Community</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>Created with ❤️ for the Builder.io community • Made by Sai Prasad</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
