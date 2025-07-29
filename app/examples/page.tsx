import Link from 'next/link'
import { ArrowRight, Book, Code, Zap, Globe, Shield, Users, Home } from 'lucide-react'

/**
 * Examples Index Page
 * 
 * Central hub for all Builder.io integration examples and patterns.
 * Provides organized access to different integration scenarios with
 * detailed descriptions and live demonstrations.
 */
export default function ExamplesPage() {
  const examples = [
    {
      title: 'Page Models',
      description: 'Complete page management with dynamic routing, SEO, and catch-all patterns',
      icon: Book,
      href: '/examples/page-models',
      features: ['Dynamic routing', 'SEO optimization', 'Preview mode', '404 handling'],
      difficulty: 'Beginner',
      color: 'bg-blue-500'
    },
    {
      title: 'Section Models',
      description: 'Reusable content blocks and component embedding within existing pages',
      icon: Code,
      href: '/examples/section-models',
      features: ['Content blocks', 'Page embedding', 'Reusable sections', 'Layout flexibility'],
      difficulty: 'Beginner',
      color: 'bg-green-500'
    },
    {
      title: 'Custom Components',
      description: 'Register React components, handle props, and create interactive elements',
      icon: Zap,
      href: '/examples/custom-components',
      features: ['Component registration', 'Props handling', 'Interactive elements', 'Visual editor'],
      difficulty: 'Intermediate',
      color: 'bg-purple-500'
    },
    {
      title: 'API Integration',
      description: 'Fetch external data, integrate with third-party APIs, and display dynamic content',
      icon: Globe,
      href: '/examples/api-integration',
      features: ['External APIs', 'Data fetching', 'Dynamic content', 'Error handling'],
      difficulty: 'Intermediate',
      color: 'bg-orange-500'
    },
    {
      title: 'Authentication & Personalization',
      description: 'Show/hide content based on user status, roles, and personalization',
      icon: Shield,
      href: '/examples/authentication',
      features: ['User authentication', 'Role-based access', 'Personalization', 'Conditional content'],
      difficulty: 'Advanced',
      color: 'bg-red-500'
    },
    {
      title: 'Performance & Caching',
      description: 'ISR, SSG, SSR strategies, cache invalidation, and optimization techniques',
      icon: Users,
      href: '/examples/performance',
      features: ['ISR/SSG/SSR', 'Cache invalidation', 'Webhooks', 'Performance optimization'],
      difficulty: 'Advanced',
      color: 'bg-teal-500'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
              <h1 className="text-2xl font-bold text-gray-900">Builder.io Examples</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Integration Examples
            <span className="text-builder-primary block">& Patterns</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore real-world Builder.io integration patterns with Next.js. Each example includes 
            working code, detailed explanations, and best practices.
          </p>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {examples.map((example) => {
              const IconComponent = example.icon;
              
              return (
                <div key={example.href} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${example.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {example.title}
                        </h3>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${getDifficultyColor(example.difficulty)}`}>
                          {example.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {example.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">What you'll learn:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {example.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-builder-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link 
                    href={example.href}
                    className="inline-flex items-center text-builder-primary font-semibold hover:text-builder-secondary transition-colors group"
                  >
                    Explore Example
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Additional Resources */}
          <div className="mt-16 bg-gradient-to-r from-builder-primary to-builder-secondary rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
            <p className="text-lg mb-6 opacity-90">
              Check out these additional resources to master Builder.io integration
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://builder.io/c/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-builder-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Official Documentation
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              
              <Link 
                href="/documentation"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-builder-primary transition-colors"
              >
                Setup Guide
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
