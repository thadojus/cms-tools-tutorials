# Builder.io Integration Reference

A comprehensive developer guide and code reference for integrating Builder.io with Next.js. This application serves as a complete resource for developers of all skill levels, from beginners to architects, featuring real-world scenarios, step-by-step implementation examples, and well-documented code.

![Builder.io Integration](https://img.shields.io/badge/Builder.io-Integration-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)

## 🎯 Purpose

This reference application demonstrates every major Builder.io integration pattern and coding scenario, focusing on practical use cases rather than just API references. It's designed to be your go-to resource for:

- **Learning Builder.io integration patterns**
- **Understanding best practices and conventions**
- **Seeing real-world implementation examples**
- **Troubleshooting common issues**
- **Scaling Builder.io integrations**

## ✨ Features

### 🧩 Complete Integration Patterns

- **✅ Page Models Integration** - Full-page content management with dynamic routing
- **✅ Section Models Integration** - Reusable content blocks and component embedding
- **✅ Structured Data Models** - Managing structured content (products, banners, etc.)
- **✅ Symbols Usage** - Reusable components with props support
- **✅ Custom API Integration** - External data fetching and mapping
- **✅ Caching Strategies** - ISR, SSG, SSR implementation with Builder.io
- **✅ Authentication-aware Content** - User-based content visibility and personalization
- **✅ Custom Components** - React component registration and Builder.io integration

### 🛠 Technical Features

- **Next.js 14 App Router** - Modern Next.js patterns and conventions
- **TypeScript** - Full type safety and developer experience
- **Tailwind CSS** - Utility-first styling with custom Builder.io theme
- **Server-side Rendering** - Optimized for SEO and performance
- **Error Handling** - Comprehensive error boundaries and fallbacks
- **Preview Mode** - Full Builder.io editor integration

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Next.js 14+ knowledge
- Builder.io account ([Sign up here](https://builder.io))

### Installation

1. **Clone and Install**
   ```bash
   git clone [repository-url]
   cd cms-tools-tutorials
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your Builder.io API key:
   ```env
   NEXT_PUBLIC_BUILDER_API_KEY=your-api-key-here
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Visit the Application**
   Open [http://localhost:3000](http://localhost:3000) to explore the reference.

## 📁 Project Structure

```
├── app/
│   ├── builder-content/[[...slug]]/     # Dynamic Builder.io pages
│   │   └── page.tsx                     # Catch-all route handler
│   ├── examples/                        # Integration examples
│   │   ├── page-models/                 # Page Models examples
│   │   ├── section-models/              # Section Models examples
│   │   ├── custom-components/           # Custom component examples
│   │   ├── api-integration/             # API integration examples
│   ��   ├── authentication/              # Auth-based content examples
│   │   └── performance/                 # Caching & performance examples
│   ├── documentation/                   # Setup and usage documentation
│   ├── globals.css                      # Global styles with Tailwind
│   ├── layout.tsx                       # Root layout
│   └── page.tsx                         # Homepage
├── components/
│   ├── builder/                         # Builder.io custom components
│   │   ├── HeroSection.tsx             # Hero section component
│   │   ├── TestimonialCard.tsx         # Testimonial component
│   │   ├── ProductShowcase.tsx         # API data showcase
│   │   ├── CTAButton.tsx               # Call-to-action button
│   │   ├── APIDataDisplay.tsx          # Dynamic data display
│   │   └── ConditionalContent.tsx      # Auth-based content
│   └── common/                          # Shared components
├── lib/                                 # Utility functions
├── builder-registry.ts                  # Builder.io component registration
├── .env.local.example                   # Environment variables template
└── README.md                           # This file
```

## 🧩 Integration Examples

### Page Models
Complete page content management with Builder.io:
- **Dynamic routing** with catch-all patterns
- **SEO optimization** with metadata generation
- **Preview mode** for content editors
- **404 handling** for missing content

**Example Usage:**
```typescript
// app/[[...slug]]/page.tsx
import { Content, fetchOneEntry } from '@builder.io/sdk-react';

export default async function Page({ params, searchParams }) {
  const content = await fetchOneEntry({
    apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
    model: 'page',
    userAttributes: { urlPath: '/' + (params?.slug?.join('/') || '') },
  });

  return <Content content={content} apiKey={apiKey} model="page" />;
}
```

### Custom Components
Register React components in Builder.io's visual editor:

```typescript
// components/builder/HeroSection.tsx
'use client';

export const HeroSection = ({ title, subtitle, ctaText, ctaUrl }) => {
  return (
    <section className="hero-section">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <a href={ctaUrl}>{ctaText}</a>
    </section>
  );
};

// builder-registry.ts
export const customComponents = [
  {
    component: HeroSection,
    name: 'Hero Section',
    inputs: [
      { name: 'title', type: 'string', defaultValue: 'Welcome' },
      { name: 'subtitle', type: 'string' },
      { name: 'ctaText', type: 'string', defaultValue: 'Get Started' },
      { name: 'ctaUrl', type: 'url', defaultValue: '/' },
    ],
  },
];
```

### API Integration
Fetch and display external data within Builder.io components:

```typescript
// components/builder/ProductShowcase.tsx
'use client';

export const ProductShowcase = ({ apiEndpoint, itemsToShow = 3 }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiEndpoint)
      .then(res => res.json())
      .then(data => setData(data.slice(0, itemsToShow)));
  }, [apiEndpoint, itemsToShow]);

  return (
    <div className="product-grid">
      {data.map(item => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};
```

## 🎨 Styling & Theming

This project uses Tailwind CSS with a custom Builder.io theme:

```css
/* Custom Builder.io color palette */
.text-builder-primary { color: #3B82F6; }
.bg-builder-primary { background-color: #3B82F6; }
.border-builder-primary { border-color: #3B82F6; }

/* Component utilities */
.example-card { @apply bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow; }
.code-block { @apply bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto; }
```

## 🔧 Configuration

### Builder.io Setup

1. **Get API Key**: Sign up at [builder.io](https://builder.io) and get your API key from Account > Organization
2. **Set Environment Variable**: Add `NEXT_PUBLIC_BUILDER_API_KEY` to your `.env.local`
3. **Create Content**: Use Builder.io's visual editor to create pages and sections

### Component Registration

Register custom components in `builder-registry.ts`:

```typescript
import { type RegisteredComponent } from "@builder.io/sdk-react";
import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => 
  import('./components/MyComponent').then(mod => ({ default: mod.MyComponent }))
);

export const customComponents: RegisteredComponent[] = [
  {
    component: MyComponent,
    name: 'My Component',
    inputs: [
      { name: 'title', type: 'string', required: true },
      { name: 'showIcon', type: 'boolean', defaultValue: true },
    ],
    canHaveChildren: true,
  },
];
```

## 📚 Learning Path

### Beginner
1. **Start with Page Models** - [`/examples/page-models`](http://localhost:3000/examples/page-models)
2. **Explore Section Models** - [`/examples/section-models`](http://localhost:3000/examples/section-models)
3. **Try the Live Demo** - [`/builder-content`](http://localhost:3000/builder-content)

### Intermediate
4. **Custom Components** - [`/examples/custom-components`](http://localhost:3000/examples/custom-components)
5. **API Integration** - [`/examples/api-integration`](http://localhost:3000/examples/api-integration)
6. **Build Your Own Components** - Modify `components/builder/`

### Advanced
7. **Authentication Patterns** - [`/examples/authentication`](http://localhost:3000/examples/authentication)
8. **Performance Optimization** - [`/examples/performance`](http://localhost:3000/examples/performance)
9. **Production Deployment** - Follow deployment guide

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=.next
```

### Environment Variables
Don't forget to set these in your deployment platform:
- `NEXT_PUBLIC_BUILDER_API_KEY`
- Any other environment variables from `.env.local`

## 🐛 Troubleshooting

### Common Issues

**Content Not Loading**
- ✅ Check API key is correct
- ✅ Verify content is published in Builder.io
- ✅ Ensure URL paths match exactly

**Component Registration Issues**
- ✅ Use 'use client' directive for interactive components
- ✅ Use dynamic imports in builder-registry.ts
- ✅ Check TypeScript types are correct

**Build Errors**
- ✅ Verify all environment variables are set
- ✅ Check for client-side code in server components
- ✅ Ensure all dependencies are installed

### Getting Help

1. **Check Documentation** - [`/documentation`](http://localhost:3000/documentation)
2. **Review Examples** - [`/examples`](http://localhost:3000/examples)
3. **Builder.io Docs** - [builder.io/c/docs](https://builder.io/c/docs)
4. **Community Forum** - [forum.builder.io](https://forum.builder.io)

## 🤝 Contributing

This is a reference implementation designed to help developers learn Builder.io integration patterns. If you have suggestions for improvements or additional examples:

1. Fork the repository
2. Create a feature branch
3. Add your example with documentation
4. Submit a pull request

## 📄 License

This project is licensed under the ISC License. See the LICENSE file for details.

## 🙏 Acknowledgments

- **Builder.io Team** - For creating an amazing visual development platform
- **Next.js Team** - For the fantastic React framework
- **Vercel** - For the excellent deployment platform
- **Community Contributors** - For feedback and suggestions

---

**Built with ❤️ for the Builder.io community**

Created by [Sai Prasad](https://github.com/saiprasad) as a comprehensive learning resource for Builder.io integration with Next.js.

For questions, feedback, or support, please visit the [documentation](http://localhost:3000/documentation) or reach out through the Builder.io community forum.
