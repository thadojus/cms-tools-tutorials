import Link from 'next/link';

interface PageProps {
  params: {
    slug: string[];
  };
  searchParams: Record<string, string>;
}

/**
 * Dynamic Builder.io Content Page (Demo Implementation)
 *
 * This is a demo implementation showing the structure for Builder.io integration.
 * In a production environment, this would connect to Builder.io's API to fetch
 * and render dynamic content.
 *
 * Features demonstrated:
 * - Catch-all dynamic routing ([...slug])
 * - URL path construction
 * - Content fetching structure
 * - Error handling patterns
 * - SEO-friendly metadata
 *
 * URL Examples:
 * - /builder-content → Homepage content
 * - /builder-content/about → About page content
 * - /builder-content/products/shoes → Product page content
 * - /builder-content/blog/my-post → Blog post content
 */
export default async function BuilderContentPage(props: PageProps) {
  // Construct the URL path from the slug parameters
  const urlPath = '/' + (props.params?.slug?.join('/') || '');

  // Demo content based on URL path
  const getDemoContent = (path: string) => {
    switch (path) {
      case '/':
        return {
          title: 'Builder.io Homepage',
          content: 'This would be your homepage content managed by Builder.io. Content editors can create and modify this page using Builder.io\'s visual editor.',
          type: 'Homepage'
        };
      case '/about':
        return {
          title: 'About Us',
          content: 'This about page demonstrates how Builder.io can manage different page types. Content can include rich text, images, videos, and custom components.',
          type: 'About Page'
        };
      case '/products':
        return {
          title: 'Our Products',
          content: 'Product pages can showcase dynamic content from your inventory, with personalized recommendations and targeted messaging.',
          type: 'Product Listing'
        };
      default:
        return null;
    }
  };

  const demoContent = getDemoContent(urlPath);

  if (!demoContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Demo Content Not Available</h1>
          <p className="text-gray-600 mb-6">
            No demo content exists for the path <code className="bg-gray-100 px-2 py-1 rounded text-sm">{urlPath}</code>
          </p>

          <div className="space-y-3 text-sm text-gray-500">
            <p>Available demo pages:</p>
            <ul className="text-left space-y-1">
              <li>• <Link href="/builder-content" className="text-builder-primary hover:underline">/builder-content</Link> (Homepage)</li>
              <li>• <Link href="/builder-content/about" className="text-builder-primary hover:underline">/builder-content/about</Link> (About)</li>
              <li>• <Link href="/builder-content/products" className="text-builder-primary hover:underline">/builder-content/products</Link> (Products)</li>
            </ul>
          </div>

          <div className="mt-8 flex gap-4 justify-center">
            <Link
              href="/"
              className="px-4 py-2 bg-builder-primary text-white rounded-lg hover:bg-builder-secondary transition-colors"
            >
              ← Back Home
            </Link>
            <Link
              href="/examples"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Examples →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Render demo content with Builder.io-style layout
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-builder-primary mr-6">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
              <nav className="flex items-center space-x-6">
                <Link href="/builder-content" className="text-gray-600 hover:text-builder-primary">Home</Link>
                <Link href="/builder-content/about" className="text-gray-600 hover:text-builder-primary">About</Link>
                <Link href="/builder-content/products" className="text-gray-600 hover:text-builder-primary">Products</Link>
              </nav>
            </div>

            <div className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
              🎭 Demo Content
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-builder-primary to-builder-secondary rounded-lg p-8 text-white mb-12">
          <div className="max-w-2xl">
            <div className="text-sm opacity-90 mb-2">{demoContent.type}</div>
            <h1 className="text-4xl font-bold mb-4">{demoContent.title}</h1>
            <p className="text-lg opacity-90">
              {demoContent.content}
            </p>
          </div>
        </div>

        {/* Implementation Info */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How This Works with Builder.io
          </h2>

          <div className="prose text-gray-600">
            <p className="mb-4">
              In a real Builder.io implementation, this page would:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-builder-primary rounded-full mr-3 mt-2"></div>
                <span>Fetch content from Builder.io using the URL path: <code className="bg-gray-200 px-2 py-1 rounded text-sm">{urlPath}</code></span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-builder-primary rounded-full mr-3 mt-2"></div>
                <span>Render custom components registered in the Builder.io visual editor</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-builder-primary rounded-full mr-3 mt-2"></div>
                <span>Support preview mode for content editors</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-builder-primary rounded-full mr-3 mt-2"></div>
                <span>Enable A/B testing and audience targeting</span>
              </li>
            </ul>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Integration Code Structure:</h3>
              <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto">
{`// Real Builder.io implementation would look like:
import { Content, fetchOneEntry } from '@builder.io/sdk-react';

const content = await fetchOneEntry({
  apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
  model: 'page',
  userAttributes: { urlPath: '${urlPath}' },
});

return <Content content={content} model="page" />;`}
              </pre>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            href="/examples/page-models"
            className="inline-flex items-center text-builder-primary font-medium hover:text-builder-secondary"
          >
            ← View Implementation Guide
          </Link>

          <Link
            href="/examples"
            className="inline-flex items-center text-builder-primary font-medium hover:text-builder-secondary"
          >
            More Examples →
          </Link>
        </div>
      </main>
    </div>
  );
}

/**
 * Generate metadata for SEO
 * 
 * This function fetches Builder.io content to extract metadata for proper SEO.
 * In a production app, you might want to cache this data or use specific 
 * fields from your Builder.io content.
 */
export async function generateMetadata(props: PageProps) {
  const urlPath = '/' + (props.params?.slug?.join('/') || '');
  
  try {
    // You could fetch content here to get title, description, etc.
    // For demo purposes, we'll use the URL path
    return {
      title: `Builder.io Content${urlPath !== '/' ? ` - ${urlPath}` : ''}`,
      description: `Content managed by Builder.io for ${urlPath}`,
      openGraph: {
        title: `Builder.io Content - ${urlPath}`,
        description: `Dynamic content powered by Builder.io`,
        type: 'website',
      },
    };
  } catch (error) {
    return {
      title: 'Builder.io Content',
      description: 'Content managed by Builder.io',
    };
  }
}
