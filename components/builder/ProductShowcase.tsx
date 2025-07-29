'use client';

import { useState, useEffect } from 'react';

interface ProductShowcaseProps {
  title?: string;
  apiEndpoint?: string;
  itemsToShow?: number;
  layout?: 'grid' | 'carousel' | 'list';
}

interface ProductItem {
  id: number;
  title: string;
  body?: string;
  userId?: number;
  // Add more fields as needed based on your API response
}

/**
 * Product Showcase Component for Builder.io
 * 
 * Fetches and displays data from external APIs with customizable layouts.
 * Demonstrates how to integrate external data sources with Builder.io components.
 * 
 * Features:
 * - Multiple layout options (grid, carousel, list)
 * - Configurable API endpoints
 * - Loading states and error handling
 * - Responsive design
 * - Builder.io editor integration
 */
export const ProductShowcase = ({
  title = 'Featured Products',
  apiEndpoint = 'https://jsonplaceholder.typicode.com/posts',
  itemsToShow = 3,
  layout = 'grid'
}: ProductShowcaseProps) => {
  const [data, setData] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        // Limit the number of items based on itemsToShow prop
        const limitedData = Array.isArray(result) 
          ? result.slice(0, itemsToShow)
          : [result].slice(0, itemsToShow);
        
        setData(limitedData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (apiEndpoint) {
      fetchData();
    }
  }, [apiEndpoint, itemsToShow]);

  // Loading state
  if (loading) {
    return (
      <div className="py-8">
        <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-builder-primary"></div>
          <span className="ml-3 text-gray-600">Loading data...</span>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="py-8">
        <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
        <div className="text-center py-12">
          <div className="text-red-500 mb-4">
            <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg font-semibold">Error loading data</p>
            <p className="text-sm mt-2">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  // Layout configurations
  const getLayoutClasses = () => {
    switch (layout) {
      case 'grid':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
      case 'list':
        return 'space-y-4';
      case 'carousel':
        return 'flex overflow-x-auto space-x-6 pb-4';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    }
  };

  const getItemClasses = () => {
    switch (layout) {
      case 'carousel':
        return 'flex-none w-80 bg-white rounded-lg shadow-md p-6';
      case 'list':
        return 'bg-white rounded-lg shadow-md p-6 flex items-start space-x-4';
      default:
        return 'bg-white rounded-lg shadow-md p-6';
    }
  };

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
      
      <div className={getLayoutClasses()}>
        {data.map((item) => (
          <div key={item.id} className={getItemClasses()}>
            {layout === 'list' && (
              <div className="flex-shrink-0 w-12 h-12 bg-builder-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">#{item.id}</span>
              </div>
            )}
            
            <div className={layout === 'list' ? 'flex-1' : ''}>
              <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                {item.title}
              </h3>
              
              {item.body && (
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {item.body}
                </p>
              )}
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>ID: {item.id}</span>
                {item.userId && <span>User: {item.userId}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* API Info for developers */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Data fetched from: <code className="bg-gray-100 px-2 py-1 rounded">{apiEndpoint}</code></p>
        <p className="mt-1">Showing {data.length} of {itemsToShow} requested items</p>
      </div>
    </div>
  );
};
