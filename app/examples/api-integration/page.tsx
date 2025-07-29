import Link from 'next/link'
import { ArrowRight, Globe, Eye, Code, Home, ExternalLink } from 'lucide-react'

/**
 * API Integration Example
 * 
 * This page demonstrates how to integrate external APIs with Builder.io components.
 * Learn how to fetch data, handle errors, and create dynamic content experiences.
 */
export default function APIIntegrationExample() {
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
              <h1 className="text-2xl font-bold text-gray-900">API Integration</h1>
            </div>
            
            <Link 
              href="/builder-content"
              className="inline-flex items-center px-4 py-2 bg-builder-primary text-white rounded-lg hover:bg-builder-secondary transition-colors"
            >
              <Eye className="w-4 h-4 mr-2" />
              See API Components
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              API Integration
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect Builder.io with external APIs to create dynamic, data-driven content. 
              Fetch real-time data and display it beautifully with custom components.
            </p>
          </div>

          {/* Live API Examples */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Live API Integrations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Globe className="w-4 h-4 text-green-600" />
                  </div>
                  <h3 className="font-semibold">JSONPlaceholder API</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Demo API for testing and prototyping with posts, users, and comments data.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Posts: jsonplaceholder.typicode.com/posts</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Users: jsonplaceholder.typicode.com/users</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Photos: jsonplaceholder.typicode.com/photos</span>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Code className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Custom API Endpoints</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Connect to your own APIs for products, content, user data, and more.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>REST APIs with JSON responses</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>GraphQL endpoints</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Third-party service APIs</span>
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
              
              {/* Basic API Component */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Creating API-Connected Components</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="subsection-header">1. Build an API Data Component</h3>
                    <p className="text-gray-600 mb-4">
                      Create a component that fetches and displays external data:
                    </p>
                    
                    <pre className="code-block">
{`// components/builder/APIDataDisplay.tsx
'use client';
import { useState, useEffect } from 'react';

interface APIDataDisplayProps {
  apiUrl: string;
  title?: string;
  displayFormat?: 'cards' | 'table' | 'list';
  maxItems?: number;
}

export const APIDataDisplay = ({
  apiUrl = 'https://jsonplaceholder.typicode.com/users',
  title = 'API Data',
  displayFormat = 'cards',
  maxItems = 5
}: APIDataDisplayProps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(Array.isArray(result) ? result.slice(0, maxItems) : [result]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (apiUrl) fetchData();
  }, [apiUrl, maxItems]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="border rounded-lg p-4">
            <pre>{JSON.stringify(item, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="subsection-header">2. Register Component with API Inputs</h3>
                    <p className="text-gray-600 mb-4">
                      Configure the component in Builder.io with API-specific inputs:
                    </p>
                    
                    <pre className="code-block">
{`// builder-registry.ts
{
  component: APIDataDisplay,
  name: 'API Data Display',
  inputs: [
    {
      name: 'apiUrl',
      type: 'url',
      defaultValue: 'https://jsonplaceholder.typicode.com/users',
      required: true,
      helperText: 'URL to fetch data from'
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
      max: 20,
      min: 1,
    }
  ],
}`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Advanced Patterns */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Advanced API Patterns</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="subsection-header">Server-Side Data Fetching</h3>
                    <p className="text-gray-600 mb-4">
                      For SEO and performance, fetch data on the server:
                    </p>
                    
                    <pre className="code-block">
{`// app/api-demo/page.tsx
import { APIDataDisplay } from '@/components/builder/APIDataDisplay';

export default async function APIPage() {
  // Fetch data server-side
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return (
    <div>
      <h1>Blog Posts</h1>
      <div className="grid gap-6">
        {posts.slice(0, 6).map(post => (
          <article key={post.id} className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="subsection-header">Error Handling & Loading States</h3>
                    <p className="text-gray-600 mb-4">
                      Provide robust error handling and user feedback:
                    </p>
                    
                    <pre className="code-block">
{`const [state, setState] = useState({
  data: [],
  loading: true,
  error: null
});

const fetchData = async () => {
  try {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const result = await response.json();
    setState({
      data: Array.isArray(result) ? result : [result],
      loading: false,
      error: null
    });
  } catch (error) {
    setState(prev => ({
      ...prev,
      loading: false,
      error: error.message
    }));
  }
};`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="subsection-header">Caching and Performance</h3>
                    <p className="text-gray-600 mb-4">
                      Implement caching for better performance:
                    </p>
                    
                    <pre className="code-block">
{`// lib/api-cache.ts
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function fetchWithCache(url: string) {
  const now = Date.now();
  const cached = cache.get(url);
  
  if (cached && (now - cached.timestamp) < CACHE_DURATION) {
    return cached.data;
  }
  
  const response = await fetch(url);
  const data = await response.json();
  
  cache.set(url, {
    data,
    timestamp: now
  });
  
  return data;
}`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Common Use Cases */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Common API Integration Scenarios</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-blue-700">🛍️ E-commerce</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Product catalogs</li>
                      <li>• Inventory updates</li>
                      <li>• Price displays</li>
                      <li>• Customer reviews</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-green-700">📰 Content</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Blog posts</li>
                      <li>• News feeds</li>
                      <li>• Event listings</li>
                      <li>• User-generated content</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-purple-700">👥 Social</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Social media feeds</li>
                      <li>• User profiles</li>
                      <li>• Community posts</li>
                      <li>• Testimonials</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-orange-700">📊 Analytics</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Real-time metrics</li>
                      <li>• Performance data</li>
                      <li>• User statistics</li>
                      <li>• Business insights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* API Examples */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
                <h3 className="font-semibold text-gray-900 mb-4">Try These APIs</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">JSONPlaceholder</div>
                    <div className="text-gray-500 text-xs">jsonplaceholder.typicode.com</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Cat Facts</div>
                    <div className="text-gray-500 text-xs">catfact.ninja/fact</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Random User</div>
                    <div className="text-gray-500 text-xs">randomuser.me/api</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">REST Countries</div>
                    <div className="text-gray-500 text-xs">restcountries.com/v3.1/all</div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link 
                    href="/builder-content"
                    className="text-sm text-builder-primary hover:text-builder-secondary font-medium"
                  >
                    See API Components Live →
                  </Link>
                </div>
              </div>

              {/* Best Practices */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">API Best Practices</h3>
                <div className="space-y-3">
                  {[
                    'Handle loading states',
                    'Implement error boundaries',
                    'Cache API responses',
                    'Validate API data',
                    'Use proper HTTP methods',
                    'Handle rate limiting'
                  ].map((practice, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-3">Next Steps</h3>
                <p className="text-sm opacity-90 mb-4">
                  Learn about user authentication
                </p>
                <Link 
                  href="/examples/authentication"
                  className="inline-flex items-center text-sm font-medium text-white hover:text-gray-200"
                >
                  Authentication →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
