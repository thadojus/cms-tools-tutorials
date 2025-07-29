import {
  Content,
  fetchOneEntry,
  isPreviewing,
  isEditing,
} from '@builder.io/sdk-react';
import { customComponents } from '../../../builder-registry';

interface PageProps {
  params: {
    slug: string[];
  };
  searchParams: Record<string, string>;
}

// Builder.io API key from environment variables
const BUILDER_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

/**
 * Dynamic Builder.io Content Page
 * 
 * This page demonstrates the full Page Models integration pattern with Builder.io.
 * It uses catch-all routing to handle any URL path and fetches corresponding
 * content from Builder.io's page model.
 * 
 * Features:
 * - Catch-all dynamic routing ([...slug])
 * - Server-side content fetching
 * - Preview mode support for content editors
 * - Custom component registration
 * - SEO-friendly with proper metadata
 * - 404 handling for missing content
 * 
 * URL Examples:
 * - /builder-content → Homepage content
 * - /builder-content/about → About page content
 * - /builder-content/products/shoes → Product page content
 * - /builder-content/blog/my-post → Blog post content
 */
export default async function BuilderContentPage(props: PageProps) {
  // Initialize Builder.io Node.js runtime (skip in production builds)
  if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
    try {
      const { initializeNodeRuntime } = await import('@builder.io/sdk-react/node/init');
      initializeNodeRuntime();
    } catch (error) {
      console.warn('Builder.io Node runtime initialization failed:', error);
    }
  }

  // Construct the URL path from the slug parameters
  const urlPath = '/' + (props.params?.slug?.join('/') || '');
  
  console.log(`[Builder.io] Fetching content for path: ${urlPath}`);

  try {
    // Fetch content from Builder.io page model
    const content = await fetchOneEntry({
      options: props.searchParams, // Pass query parameters for targeting/personalization
      apiKey: BUILDER_PUBLIC_API_KEY,
      model: 'page', // Using the 'page' model for full-page content
      userAttributes: { urlPath }, // Pass the URL path for content matching
    });

    console.log(`[Builder.io] Content found:`, !!content);

    // Determine if content should be shown (including preview/edit modes)
    const canShowContent =
      content || isPreviewing(props.searchParams) || isEditing(props.searchParams);
    
    // Handle 404 case - no content found and not in preview/edit mode
    if (!canShowContent) {
      console.log(`[Builder.io] No content found for ${urlPath}`);
      
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Content Not Found</h1>
            <p className="text-gray-600 mb-6">
              No content exists for the path <code className="bg-gray-100 px-2 py-1 rounded text-sm">{urlPath}</code>
            </p>
            
            <div className="space-y-3 text-sm text-gray-500">
              <p>To create content for this page:</p>
              <ol className="text-left space-y-2">
                <li>1. Go to <a href="https://builder.io" target="_blank" rel="noopener noreferrer" className="text-builder-primary hover:underline">Builder.io</a></li>
                <li>2. Create a new page in the 'page' model</li>
                <li>3. Set the URL path to: <strong>{urlPath}</strong></li>
                <li>4. Publish your content</li>
              </ol>
            </div>
            
            <div className="mt-8 flex gap-4 justify-center">
              <a
                href="/"
                className="px-4 py-2 bg-builder-primary text-white rounded-lg hover:bg-builder-secondary transition-colors"
              >
                ← Back Home
              </a>
              <a
                href="https://builder.io/content"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Create Content →
              </a>
            </div>
          </div>
        </div>
      );
    }
    
    console.log(`[Builder.io] Rendering content for ${urlPath}`);
    
    // Render the Builder.io content with registered custom components
    return (
      <div className="min-h-screen">
        {/* 
          Builder.io Content Component
          - Renders the fetched content using Builder.io's React SDK
          - Automatically handles component registration from builder-registry.ts
          - Supports all Builder.io features: A/B testing, targeting, analytics, etc.
        */}
        <Content 
          content={content} 
          apiKey={BUILDER_PUBLIC_API_KEY} 
          model="page"
          customComponents={customComponents} // Register our custom components
        />
        
        {/* Development info - only shown in preview/edit modes */}
        {(isPreviewing(props.searchParams) || isEditing(props.searchParams)) && (
          <div className="fixed bottom-4 right-4 bg-builder-primary text-white px-4 py-2 rounded-lg text-sm shadow-lg">
            🔧 Builder.io {isPreviewing(props.searchParams) ? 'Preview' : 'Edit'} Mode
          </div>
        )}
      </div>
    );
    
  } catch (error) {
    console.error('[Builder.io] Error fetching content:', error);
    
    // Handle API errors gracefully
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Content Error</h1>
          <p className="text-gray-600 mb-6">
            There was an error loading content from Builder.io.
          </p>
          
          <div className="text-sm text-gray-500 mb-6">
            <p>Possible causes:</p>
            <ul className="text-left mt-2 space-y-1">
              <li>• Invalid API key configuration</li>
              <li>• Network connectivity issues</li>
              <li>• Builder.io service temporarily unavailable</li>
            </ul>
          </div>
          
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-builder-primary text-white rounded-lg hover:bg-builder-secondary transition-colors"
            >
              Try Again
            </button>
            <a
              href="/"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              ← Back Home
            </a>
          </div>
        </div>
      </div>
    );
  }
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
