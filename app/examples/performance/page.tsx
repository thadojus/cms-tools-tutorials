import Link from 'next/link'
import { ArrowRight, Users, Eye, Zap, Home, ExternalLink, Clock, Database } from 'lucide-react'

/**
 * Performance & Caching Example
 * 
 * This page demonstrates performance optimization strategies for Builder.io
 * integrations, including ISR, SSG, SSR, caching strategies, and webhooks.
 */
export default function PerformanceExample() {
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
              <h1 className="text-2xl font-bold text-gray-900">Performance & Caching</h1>
            </div>
            
            <Link 
              href="/documentation"
              className="inline-flex items-center px-4 py-2 bg-builder-primary text-white rounded-lg hover:bg-builder-secondary transition-colors"
            >
              <Eye className="w-4 h-4 mr-2" />
              Full Documentation
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Performance & Caching
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Optimize your Builder.io integration for maximum performance. Learn about 
              ISR, SSG, SSR strategies, cache invalidation, and advanced optimization techniques.
            </p>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Performance Strategies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-green-900 mb-2">ISR</h3>
                <p className="text-sm text-green-700">Incremental Static Regeneration</p>
                <div className="text-xs text-green-600 mt-2">Fast + Fresh Content</div>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
                <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-900 mb-2">SSG</h3>
                <p className="text-sm text-blue-700">Static Site Generation</p>
                <div className="text-xs text-blue-600 mt-2">Maximum Speed</div>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
                <Database className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-purple-900 mb-2">SSR</h3>
                <p className="text-sm text-purple-700">Server-Side Rendering</p>
                <div className="text-xs text-purple-600 mt-2">Real-time Data</div>
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
              
              {/* ISR Implementation */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Incremental Static Regeneration (ISR)</h2>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-emerald-900 mb-3">🎯 Scenario: High-Traffic News Website</h3>
                  <p className="text-emerald-800 mb-3">
                    Your news website gets 100k daily visitors and publishes 50+ articles per day. You need lightning-fast
                    page loads for SEO and user experience, but content updates frequently. Traditional static sites are
                    too slow to rebuild, and server-side rendering can't handle the traffic spikes.
                  </p>
                  <div className="bg-emerald-100 border border-emerald-300 rounded p-3">
                    <strong className="text-emerald-900">Challenge:</strong>
                    <span className="text-emerald-800 text-sm"> Static speed + Dynamic content + High traffic + Fast publishing</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="subsection-header">Configure ISR for Builder.io Content</h3>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-blue-800 mb-2">How ISR Solves This</h4>
                      <p className="text-blue-700 text-sm">
                        ISR serves cached static pages instantly (fast), regenerates pages in the background when content
                        changes (fresh), and handles traffic spikes without server load (scalable). Your news site gets
                        sub-100ms page loads while editors publish updates that appear within minutes.
                      </p>
                    </div>
                    
                    <pre className="code-block">
{`// app/builder-content/[[...slug]]/page.tsx
import { Content, fetchOneEntry } from '@builder.io/sdk-react';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BuilderPage({ params }) {
  const urlPath = '/' + (params?.slug?.join('/') || '');
  
  const content = await fetchOneEntry({
    apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
    model: 'page',
    userAttributes: { urlPath },
    options: {
      // Cache content aggressively on CDN
      cacheSeconds: 300, // 5 minutes
    },
  });

  return <Content content={content} model="page" />;
}

// Generate static params for known pages
export async function generateStaticParams() {
  // Fetch all published pages from Builder.io
  const pages = await fetch(\`https://cdn.builder.io/api/v3/content/page?\
apiKey=\${process.env.NEXT_PUBLIC_BUILDER_API_KEY}&limit=100\`);
  
  const data = await pages.json();
  
  return data.results.map((page) => ({
    slug: page.data?.url?.split('/').filter(Boolean) || [],
  }));
}`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="subsection-header">Custom Revalidation Logic</h3>
                    <p className="text-gray-600 mb-4">
                      Implement intelligent revalidation based on content type:
                    </p>
                    
                    <pre className="code-block">
{`// lib/revalidation.ts
export function getRevalidationTime(contentType: string) {
  switch (contentType) {
    case 'landing-page':
      return 300; // 5 minutes for marketing pages
    case 'blog-post':
      return 3600; // 1 hour for blog content
    case 'product-page':
      return 60; // 1 minute for product info
    default:
      return 900; // 15 minutes default
  }
}

// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  const { path, secret } = await request.json();
  
  // Verify webhook secret
  if (secret !== process.env.REVALIDATION_SECRET) {
    return Response.json({ message: 'Invalid secret' }, { status: 401 });
  }
  
  try {
    revalidatePath(path);
    return Response.json({ revalidated: true });
  } catch (err) {
    return Response.json({ message: 'Error revalidating' }, { status: 500 });
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Caching Strategies */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Advanced Caching Strategies</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="subsection-header">Multi-Layer Caching</h3>
                    <p className="text-gray-600 mb-4">
                      Implement caching at multiple levels for optimal performance:
                    </p>
                    
                    <pre className="code-block">
{`// lib/cache.ts
import { unstable_cache } from 'next/cache';

// Memory cache for frequently accessed data
const memoryCache = new Map();

export const getCachedContent = unstable_cache(
  async (apiKey: string, model: string, urlPath: string) => {
    // Check memory cache first
    const cacheKey = \`\${model}-\${urlPath}\`;
    if (memoryCache.has(cacheKey)) {
      const cached = memoryCache.get(cacheKey);
      if (Date.now() - cached.timestamp < 60000) { // 1 minute
        return cached.data;
      }
    }

    // Fetch from Builder.io
    const content = await fetchOneEntry({
      apiKey,
      model,
      userAttributes: { urlPath },
    });

    // Store in memory cache
    memoryCache.set(cacheKey, {
      data: content,
      timestamp: Date.now(),
    });

    return content;
  },
  ['builder-content'],
  {
    revalidate: 300, // 5 minutes
    tags: ['builder'],
  }
);`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="subsection-header">Redis Caching</h3>
                    <p className="text-gray-600 mb-4">
                      Use Redis for distributed caching in production:
                    </p>
                    
                    <pre className="code-block">
{`// lib/redis-cache.ts
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export class BuilderCache {
  private static instance: BuilderCache;
  
  static getInstance() {
    if (!this.instance) {
      this.instance = new BuilderCache();
    }
    return this.instance;
  }

  async get(key: string) {
    try {
      const cached = await redis.get(key);
      return cached ? JSON.parse(cached) : null;
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  }

  async set(key: string, data: any, ttl: number = 300) {
    try {
      await redis.setex(key, ttl, JSON.stringify(data));
    } catch (error) {
      console.error('Cache set error:', error);
    }
  }

  async invalidate(pattern: string) {
    try {
      const keys = await redis.keys(pattern);
      if (keys.length > 0) {
        await redis.del(...keys);
      }
    } catch (error) {
      console.error('Cache invalidation error:', error);
    }
  }
}

// Usage in API route
export async function GET(request: Request) {
  const cache = BuilderCache.getInstance();
  const cacheKey = \`builder:\${urlPath}\`;
  
  let content = await cache.get(cacheKey);
  
  if (!content) {
    content = await fetchOneEntry({...});
    await cache.set(cacheKey, content, 300);
  }
  
  return Response.json(content);
}`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Webhook Integration */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Webhook-Based Cache Invalidation</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="subsection-header">Builder.io Webhook Setup</h3>
                    <p className="text-gray-600 mb-4">
                      Automatically invalidate cache when content is published:
                    </p>
                    
                    <pre className="code-block">
{`// app/api/webhooks/builder/route.ts
import { revalidateTag, revalidatePath } from 'next/cache';
import { BuilderCache } from '@/lib/redis-cache';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const { data } = payload;
    
    // Verify webhook signature (recommended)
    const signature = request.headers.get('x-builder-signature');
    if (!verifySignature(signature, payload)) {
      return Response.json({ error: 'Invalid signature' }, { status: 401 });
    }

    // Get the URL path from Builder.io data
    const urlPath = data?.url || '/';
    
    // Revalidate Next.js cache
    revalidatePath(urlPath);
    revalidateTag('builder');
    
    // Invalidate Redis cache
    const cache = BuilderCache.getInstance();
    await cache.invalidate(\`builder:\${urlPath}*\`);
    
    // Optionally warm up the cache
    if (process.env.PRELOAD_CACHE === 'true') {
      fetch(\`\${process.env.SITE_URL}\${urlPath}\`);
    }

    return Response.json({ 
      success: true, 
      revalidated: urlPath,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Webhook error:', error);
    return Response.json(
      { error: 'Webhook processing failed' }, 
      { status: 500 }
    );
  }
}

function verifySignature(signature: string, payload: any): boolean {
  // Implement signature verification
  const expectedSignature = createHmac('sha256', process.env.BUILDER_WEBHOOK_SECRET!)
    .update(JSON.stringify(payload))
    .digest('hex');
  
  return signature === \`sha256=\${expectedSignature}\`;
}`}
                    </pre>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Webhook Configuration</h4>
                    <ol className="text-yellow-700 text-sm space-y-1">
                      <li>1. Go to Builder.io → Account → Webhooks</li>
                      <li>2. Add webhook URL: <code>https://yoursite.com/api/webhooks/builder</code></li>
                      <li>3. Select events: "content.published", "content.unpublished"</li>
                      <li>4. Add secret key for security verification</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Performance Monitoring */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Performance Monitoring</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-green-700">📊 Core Web Vitals</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Largest Contentful Paint (LCP)</li>
                      <li>• First Input Delay (FID)</li>
                      <li>• Cumulative Layout Shift (CLS)</li>
                      <li>• First Contentful Paint (FCP)</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-blue-700">🔍 Monitoring Tools</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Vercel Analytics</li>
                      <li>• Google PageSpeed Insights</li>
                      <li>• Lighthouse CI</li>
                      <li>• Web Vitals extension</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-purple-700">⚡ Optimization Tips</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Optimize images with Next.js Image</li>
                      <li>• Use dynamic imports for components</li>
                      <li>• Implement skeleton loading states</li>
                      <li>• Minimize JavaScript bundle size</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-orange-700">📱 Mobile Performance</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Progressive enhancement</li>
                      <li>• Touch-friendly interactions</li>
                      <li>• Reduced motion preferences</li>
                      <li>• Offline functionality</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Performance Checklist */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
                <h3 className="font-semibold text-gray-900 mb-4">Performance Checklist</h3>
                <div className="space-y-3">
                  {[
                    'ISR configured properly',
                    'Webhook cache invalidation',
                    'Multi-layer caching',
                    'Image optimization',
                    'Bundle size monitoring',
                    'Core Web Vitals tracking'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a 
                    href="https://web.dev/vitals/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-builder-primary hover:text-builder-secondary font-medium"
                  >
                    Learn about Web Vitals →
                  </a>
                </div>
              </div>

              {/* Cache Strategies */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Cache Strategy Guide</h3>
                <div className="space-y-4">
                  <div className="text-sm">
                    <div className="font-medium text-green-700 mb-1">Static Content</div>
                    <div className="text-gray-600">Use SSG with long cache times</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-blue-700 mb-1">Semi-Dynamic</div>
                    <div className="text-gray-600">Use ISR with reasonable revalidation</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-purple-700 mb-1">Personalized</div>
                    <div className="text-gray-600">Use SSR with edge caching</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-red-700 mb-1">Real-time</div>
                    <div className="text-gray-600">Client-side fetching with SWR</div>
                  </div>
                </div>
              </div>

              {/* Completion */}
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-3">🎉 Congratulations!</h3>
                <p className="text-sm opacity-90 mb-4">
                  You've completed all Builder.io integration patterns!
                </p>
                <Link 
                  href="/examples"
                  className="inline-flex items-center text-sm font-medium text-white hover:text-gray-200"
                >
                  ← Back to Examples
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
