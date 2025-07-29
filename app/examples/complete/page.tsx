import Link from 'next/link'
import { CheckCircle, Trophy, Star, ArrowRight, Home } from 'lucide-react'

/**
 * Completion Page
 * 
 * Congratulations page for users who have explored all Builder.io integration patterns.
 * Provides next steps and additional resources.
 */
export default function CompletePage() {
  const completedTopics = [
    {
      title: 'Page Models',
      description: 'Full-page content management with dynamic routing',
      learned: ['Catch-all routing', 'SEO optimization', 'Preview modes'],
      href: '/examples/page-models'
    },
    {
      title: 'Section Models', 
      description: 'Reusable content blocks within existing pages',
      learned: ['Content embedding', 'Hybrid static/dynamic pages'],
      href: '/examples/section-models'
    },
    {
      title: 'Custom Components',
      description: 'React component registration in Builder.io',
      learned: ['Component registration', 'Props configuration', 'Brand consistency'],
      href: '/examples/custom-components'
    },
    {
      title: 'API Integration',
      description: 'External data fetching and display',
      learned: ['Dynamic data', 'Error handling', 'Real-time content'],
      href: '/examples/api-integration'
    },
    {
      title: 'Authentication',
      description: 'User-based content personalization',
      learned: ['Conditional content', 'Role-based access', 'Personalization'],
      href: '/examples/authentication'
    },
    {
      title: 'Performance & Caching',
      description: 'Optimization strategies and caching',
      learned: ['ISR configuration', 'Webhook invalidation', 'Performance monitoring'],
      href: '/examples/performance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
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
              <h1 className="text-2xl font-bold text-gray-900">Completion</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🎉 Congratulations!
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            You've explored all major Builder.io integration patterns! You now have the knowledge 
            to build powerful, scalable content management solutions.
          </p>

          <div className="bg-white rounded-xl shadow-lg border border-green-200 p-8 mb-12">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Builder.io Integration Expert
            </h2>
            <p className="text-gray-600">
              You've mastered the complete Builder.io ecosystem from basic page models 
              to advanced performance optimization strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Completed Topics */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Topics You've Mastered
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {completedTopics.map((topic, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{topic.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {topic.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium text-gray-700">Key Learnings:</h4>
                  <ul className="space-y-1">
                    {topic.learned.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={topic.href}
                  className="text-sm text-builder-primary hover:text-builder-secondary font-medium"
                >
                  Review Topic →
                </Link>
              </div>
            ))}
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-builder-primary to-builder-secondary rounded-xl p-8 text-white text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Ready for Real-World Implementation?</h2>
            <p className="text-lg mb-6 opacity-90">
              Take your Builder.io knowledge and apply it to production projects
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Start a Project</h3>
                <p className="text-sm opacity-90">Apply these patterns to your own website or app</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Join the Community</h3>
                <p className="text-sm opacity-90">Share your implementations and learn from others</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Advanced Topics</h3>
                <p className="text-sm opacity-90">Explore Builder.io's advanced features and plugins</p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Continue Your Learning Journey
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Official Resources</h3>
                <div className="space-y-3">
                  <a 
                    href="https://builder.io/c/docs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-builder-primary"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Builder.io Documentation
                  </a>
                  <a 
                    href="https://github.com/BuilderIO" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-builder-primary"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    GitHub Examples
                  </a>
                  <a 
                    href="https://forum.builder.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-builder-primary"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Community Forum
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">This Reference App</h3>
                <div className="space-y-3">
                  <Link 
                    href="/documentation"
                    className="flex items-center text-gray-600 hover:text-builder-primary"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Setup Documentation
                  </Link>
                  <Link 
                    href="/builder-content"
                    className="flex items-center text-gray-600 hover:text-builder-primary"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Live Content Examples
                  </Link>
                  <Link 
                    href="/examples"
                    className="flex items-center text-gray-600 hover:text-builder-primary"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    All Integration Examples
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
