export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <h1 className="title">CMS Tools Tutorials</h1>
        <p className="description">Welcome to our comprehensive guide for CMS tools and tutorials</p>
      </header>
      
      <section className="tutorials-section">
        <h2 className="section-title">Available Tutorials</h2>
        <div className="tutorials-grid">
          <div className="tutorial-card">
            <h3 className="tutorial-title">Getting Started with CMS</h3>
            <p className="tutorial-description">Learn the basics of content management systems</p>
          </div>
          <div className="tutorial-card">
            <h3 className="tutorial-title">Advanced CMS Features</h3>
            <p className="tutorial-description">Explore advanced functionality and customization</p>
          </div>
          <div className="tutorial-card">
            <h3 className="tutorial-title">CMS Integration</h3>
            <p className="tutorial-description">Integrate your CMS with other tools and services</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .title {
          font-size: 3rem;
          color: #333;
          margin-bottom: 16px;
        }
        
        .description {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .tutorials-section {
          margin-top: 40px;
        }
        
        .section-title {
          font-size: 2rem;
          color: #333;
          margin-bottom: 24px;
          text-align: center;
        }
        
        .tutorials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 32px;
        }
        
        .tutorial-card {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 24px;
          border: 1px solid #e9ecef;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .tutorial-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .tutorial-title {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 12px;
        }
        
        .tutorial-description {
          color: #666;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .title {
            font-size: 2rem;
          }
          
          .tutorials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}
