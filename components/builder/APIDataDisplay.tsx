'use client';

import { useState, useEffect } from 'react';

interface APIDataDisplayProps {
  apiUrl: string;
  title?: string;
  displayFormat?: 'cards' | 'table' | 'list';
  maxItems?: number;
}

interface DataItem {
  id: number | string;
  [key: string]: any;
}

/**
 * API Data Display Component for Builder.io
 * 
 * A versatile component for fetching and displaying data from external APIs.
 * Supports multiple display formats and is fully configurable through Builder.io.
 * 
 * Features:
 * - Multiple display formats (cards, table, list)
 * - Automatic data type detection
 * - Error handling and loading states
 * - Responsive design
 * - Configurable item limits
 */
export const APIDataDisplay = ({
  apiUrl = 'https://jsonplaceholder.typicode.com/users',
  title = 'API Data',
  displayFormat = 'cards',
  maxItems = 5
}: APIDataDisplayProps) => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        const processedData = Array.isArray(result) 
          ? result.slice(0, maxItems)
          : [result];
        
        setData(processedData);
      } catch (err) {
        console.error('Error fetching API data:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    if (apiUrl) {
      fetchData();
    }
  }, [apiUrl, maxItems]);

  // Helper function to format values for display
  const formatValue = (value: any): string => {
    if (value === null || value === undefined) return 'N/A';
    if (typeof value === 'object') return JSON.stringify(value);
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    return String(value);
  };

  // Get keys for table headers (excluding nested objects and arrays)
  const getDisplayKeys = (items: DataItem[]): string[] => {
    if (items.length === 0) return [];
    
    const firstItem = items[0];
    return Object.keys(firstItem).filter(key => {
      const value = firstItem[key];
      return typeof value !== 'object' || value === null;
    }).slice(0, 5); // Limit to 5 columns for readability
  };

  // Loading state
  if (loading) {
    return (
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-builder-primary"></div>
          <span className="ml-3 text-gray-600">Fetching data...</span>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <div className="text-red-600 mb-4">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-semibold">Error loading data</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
          <p className="text-gray-600 text-sm">
            API URL: <code className="bg-gray-100 px-2 py-1 rounded">{apiUrl}</code>
          </p>
        </div>
      </div>
    );
  }

  // Cards format
  if (displayFormat === 'cards') {
    return (
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={item.id || index} className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-3">
                {Object.entries(item).slice(0, 4).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-sm font-medium text-gray-500 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </dt>
                    <dd className="text-sm text-gray-900 mt-1 break-words">
                      {formatValue(value)}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Table format
  if (displayFormat === 'table') {
    const keys = getDisplayKeys(data);
    
    return (
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                {keys.map((key) => (
                  <th key={key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={item.id || index} className="hover:bg-gray-50">
                  {keys.map((key) => (
                    <td key={key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatValue(item[key])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // List format
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={item.id || index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-builder-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {index + 1}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {Object.entries(item).slice(0, 6).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm font-medium text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </dt>
                      <dd className="text-sm text-gray-900 mt-1 break-words">
                        {formatValue(value)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* API Info */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Data from: <code className="bg-gray-100 px-2 py-1 rounded">{apiUrl}</code></p>
        <p className="mt-1">Showing {data.length} items (max: {maxItems})</p>
      </div>
    </div>
  );
};
