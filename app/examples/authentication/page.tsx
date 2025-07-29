import Link from 'next/link'
import { ArrowRight, Shield, Eye, Users, Home, ExternalLink } from 'lucide-react'

/**
 * Authentication & Personalization Example
 * 
 * This page demonstrates how to create authentication-aware content with Builder.io.
 * Learn how to show/hide content based on user status, roles, and personalization.
 */
export default function AuthenticationExample() {
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
              <h1 className="text-2xl font-bold text-gray-900">Authentication & Personalization</h1>
            </div>
            
            <Link 
              href="/builder-content"
              className="inline-flex items-center px-4 py-2 bg-builder-primary text-white rounded-lg hover:bg-builder-secondary transition-colors"
            >
              <Eye className="w-4 h-4 mr-2" />
              Try Demo Auth
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Authentication & Personalization
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Create personalized experiences with Builder.io. Show different content based on 
              user authentication status, roles, and custom targeting rules.
            </p>
          </div>

          {/* Demo Auth Controls */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Interactive Demo</h2>
            <p className="text-gray-600 mb-6">
              This demo shows how content can change based on user authentication. 
              Visit the live components page to test different authentication states.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="w-10 h-10 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-5 h-5 text-gray-600" />
                </div>
                <h3 className="font-semibold mb-2">Anonymous Users</h3>
                <p className="text-sm text-gray-600">See login prompts and public content</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Logged In Users</h3>
                <p className="text-sm text-gray-600">Access member content and personalized experiences</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Admin Users</h3>
                <p className="text-sm text-gray-600">See admin-only content and controls</p>
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
              
              {/* Conditional Content Component */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Building Conditional Content</h2>

                <div className="bg-rose-50 border border-rose-200 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-rose-900 mb-3">🎯 Scenario: SaaS Freemium Platform</h3>
                  <p className="text-rose-800 mb-3">
                    You run a SaaS platform with free and premium tiers. Marketing wants to create landing pages that
                    show different content to anonymous visitors (signup CTAs), free users (upgrade prompts), and
                    premium users (advanced feature highlights). Each audience should see relevant, personalized content.
                  </p>
                  <div className="bg-rose-100 border border-rose-300 rounded p-3">
                    <strong className="text-rose-900">Business Goal:</strong>
                    <span className="text-rose-800 text-sm"> Increase conversions by showing relevant content to each user segment</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="subsection-header">1. Create Authentication-Aware Component</h3>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Why This Matters</h4>
                      <p className="text-blue-700 text-sm">
                        Generic content has low conversion rates. Anonymous visitors need trust signals and signup incentives.
                        Free users need upgrade motivation. Premium users need advanced feature education.
                        This component enables one page with three different experiences.
                      </p>
                    </div>
                    
                    <pre className="code-block">
{`// components/builder/ConditionalContent.tsx
'use client';
import { ReactNode, useEffect, useState } from 'react';

interface ConditionalContentProps {
  showForLoggedIn?: boolean;
  showForAnonymous?: boolean;
  requiredRole?: string;
  children?: ReactNode;
}

export const ConditionalContent = ({
  showForLoggedIn = false,
  showForAnonymous = true,
  requiredRole = '',
  children
}: ConditionalContentProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      try {
        // Replace with your actual auth check
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div>Checking authentication...</div>;

  const isAuthenticated = !!user;
  const userRole = user?.role || '';

  // Check if content should be displayed
  const shouldShow = (() => {
    if (showForLoggedIn && !isAuthenticated) return false;
    if (showForAnonymous && isAuthenticated) return false;
    if (requiredRole && userRole !== requiredRole) return false;
    return true;
  })();

  return shouldShow ? <>{children}</> : null;
};`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="subsection-header">2. Register with Builder.io</h3>
                    <p className="text-gray-600 mb-4">
                      Configure the component with authentication options:
                    </p>
                    
                    <pre className="code-block">
{`// builder-registry.ts
{
  component: ConditionalContent,
  name: 'Conditional Content',
  inputs: [
    {
      name: 'showForLoggedIn',
      type: 'boolean',
      defaultValue: false,
      helperText: 'Show only for authenticated users'
    },
    {
      name: 'showForAnonymous',
      type: 'boolean',
      defaultValue: true,
      helperText: 'Show only for anonymous users'
    },
    {
      name: 'requiredRole',
      type: 'string',
      defaultValue: '',
      helperText: 'Required user role (admin, editor, user, etc.)'
    }
  ],
  canHaveChildren: true,
}`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Authentication Strategies */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Authentication Strategies</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="subsection-header">Client-Side Authentication</h3>
                    <p className="text-gray-600 mb-4">
                      Use React hooks and context for authentication state:
                    </p>
                    
                    <pre className="code-block">
{`// contexts/AuthContext.tsx
'use client';
import { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (credentials: any) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const checkSession = async () => {
      try {
        const response = await fetch('/api/auth/session');
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        }
      } catch (error) {
        console.error('Session check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const login = async (credentials: any) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const userData = await response.json();
      setUser(userData);
    } else {
      throw new Error('Login failed');
    }
  };

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="subsection-header">Server-Side User Attributes</h3>
                    <p className="text-gray-600 mb-4">
                      Pass user data to Builder.io for server-side targeting:
                    </p>
                    
                    <pre className="code-block">
{`// app/protected/page.tsx
import { Content, fetchOneEntry } from '@builder.io/sdk-react';
import { getServerSession } from 'next-auth';

export default async function ProtectedPage() {
  const session = await getServerSession();
  
  const content = await fetchOneEntry({
    apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
    model: 'page',
    userAttributes: {
      urlPath: '/protected',
      // Pass user attributes for targeting
      userId: session?.user?.id,
      userRole: session?.user?.role,
      isLoggedIn: !!session,
      membershipLevel: session?.user?.membershipLevel,
    },
  });

  return <Content content={content} model="page" />;
}`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Targeting & Personalization */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="section-header">Advanced Targeting</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-blue-700">🎯 User Segments</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• New vs returning users</li>
                      <li>• Subscription tiers</li>
                      <li>• Geographic location</li>
                      <li>• Behavioral patterns</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-green-700">⏰ Time-based</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Business hours content</li>
                      <li>• Seasonal campaigns</li>
                      <li>• Time zone targeting</li>
                      <li>• Event-based content</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-purple-700">👥 Role-based</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Admin-only content</li>
                      <li>• Editor interfaces</li>
                      <li>• Member benefits</li>
                      <li>• Premium features</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-orange-700">🔄 A/B Testing</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Content variations</li>
                      <li>• User experience tests</li>
                      <li>• Conversion optimization</li>
                      <li>• Performance tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Auth Integration Options */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
                <h3 className="font-semibold text-gray-900 mb-4">Auth Integration Options</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">NextAuth.js</div>
                    <div className="text-gray-500 text-xs">Social & credential authentication</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Auth0</div>
                    <div className="text-gray-500 text-xs">Enterprise identity platform</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Firebase Auth</div>
                    <div className="text-gray-500 text-xs">Google's authentication service</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Supabase Auth</div>
                    <div className="text-gray-500 text-xs">Open source auth solution</div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link 
                    href="/builder-content"
                    className="text-sm text-builder-primary hover:text-builder-secondary font-medium"
                  >
                    Try Demo Authentication →
                  </Link>
                </div>
              </div>

              {/* Security Considerations */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Security Best Practices</h3>
                <div className="space-y-3">
                  {[
                    'Validate on server-side',
                    'Use secure session storage',
                    'Implement proper RBAC',
                    'Sanitize user inputs',
                    'Handle auth errors gracefully',
                    'Use HTTPS in production'
                  ].map((practice, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-3">Next Steps</h3>
                <p className="text-sm opacity-90 mb-4">
                  Optimize performance and caching
                </p>
                <Link 
                  href="/examples/performance"
                  className="inline-flex items-center text-sm font-medium text-white hover:text-gray-200"
                >
                  Performance & Caching →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
