'use client';

import { ReactNode, useState, useEffect } from 'react';

interface ConditionalContentProps {
  showForLoggedIn?: boolean;
  showForAnonymous?: boolean;
  requiredRole?: string;
  children?: ReactNode;
}

interface MockUser {
  id: string;
  name: string;
  role: string;
  isAuthenticated: boolean;
}

/**
 * Conditional Content Component for Builder.io
 * 
 * Shows or hides content based on user authentication status and roles.
 * Demonstrates how to create personalized experiences in Builder.io.
 * 
 * Features:
 * - Authentication-based content display
 * - Role-based access control
 * - Demo authentication for testing
 * - Builder.io editor integration
 * 
 * Note: This is a demo implementation. In production, integrate with your 
 * actual authentication system (NextAuth.js, Auth0, Firebase Auth, etc.)
 */
export const ConditionalContent = ({
  showForLoggedIn = false,
  showForAnonymous = true,
  requiredRole = '',
  children
}: ConditionalContentProps) => {
  const [user, setUser] = useState<MockUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock authentication state - replace with your actual auth system
  useEffect(() => {
    // Simulate authentication check
    const checkAuth = () => {
      const mockAuthData = localStorage.getItem('mockAuth');
      
      if (mockAuthData) {
        try {
          const userData = JSON.parse(mockAuthData);
          setUser(userData);
        } catch (error) {
          console.error('Error parsing auth data:', error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      
      setLoading(false);
    };

    checkAuth();
    
    // Listen for auth changes (for demo purposes)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'mockAuth') {
        checkAuth();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Demo authentication functions
  const loginDemo = (role: string = 'user') => {
    const mockUser = {
      id: `user_${Date.now()}`,
      name: `Demo ${role.charAt(0).toUpperCase() + role.slice(1)}`,
      role,
      isAuthenticated: true
    };
    
    localStorage.setItem('mockAuth', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const logoutDemo = () => {
    localStorage.removeItem('mockAuth');
    setUser(null);
  };

  // Check if content should be displayed
  const shouldShowContent = (): boolean => {
    const isAuthenticated = user?.isAuthenticated || false;
    
    // Check authentication requirements
    if (showForLoggedIn && !isAuthenticated) return false;
    if (showForAnonymous && isAuthenticated) return false;
    
    // Check role requirements
    if (requiredRole && (!user || user.role !== requiredRole)) {
      return false;
    }
    
    return true;
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center py-4">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-builder-primary"></div>
        <span className="ml-2 text-gray-600">Checking authentication...</span>
      </div>
    );
  }

  // Content visibility logic
  const contentVisible = shouldShowContent();

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
      {/* Demo Auth Controls (only visible in development/demo) */}
      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="text-sm font-semibold text-yellow-800 mb-3">
          🎭 Demo Authentication Controls
        </h4>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <button
            onClick={() => loginDemo('user')}
            className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login as User
          </button>
          <button
            onClick={() => loginDemo('admin')}
            className="px-3 py-1 text-xs bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Login as Admin
          </button>
          <button
            onClick={() => loginDemo('editor')}
            className="px-3 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600"
          >
            Login as Editor
          </button>
          <button
            onClick={logoutDemo}
            className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
        
        <div className="text-xs text-gray-600">
          <strong>Current State:</strong> {user ? `Logged in as ${user.name} (${user.role})` : 'Anonymous'}
        </div>
        
        <div className="text-xs text-gray-600 mt-1">
          <strong>Component Config:</strong> 
          {showForLoggedIn && ' Show for logged in '}
          {showForAnonymous && ' Show for anonymous '}
          {requiredRole && ` Requires role: ${requiredRole}`}
        </div>
      </div>

      {/* Conditional Content */}
      {contentVisible ? (
        <div className="bg-white border-2 border-green-200 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm font-semibold text-green-700">Content Visible</span>
          </div>
          
          {children || (
            <div className="text-gray-600">
              <p>This content is visible based on the current authentication state.</p>
              <p className="text-sm mt-2">
                Add your content inside this component in Builder.io editor.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white border-2 border-red-200 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span className="text-sm font-semibold text-red-700">Content Hidden</span>
          </div>
          
          <div className="text-gray-600">
            <p>This content is hidden based on the current authentication state.</p>
            
            {showForLoggedIn && !user?.isAuthenticated && (
              <p className="text-sm mt-2 text-blue-600">
                → Requires login to view
              </p>
            )}
            
            {showForAnonymous && user?.isAuthenticated && (
              <p className="text-sm mt-2 text-blue-600">
                → Only visible to anonymous users
              </p>
            )}
            
            {requiredRole && (!user || user.role !== requiredRole) && (
              <p className="text-sm mt-2 text-blue-600">
                → Requires role: <strong>{requiredRole}</strong>
                {user && ` (current: ${user.role})`}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
