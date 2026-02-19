import React from 'react';
import './App.css';
import './backend/app.js';

function App() {
  // Array of data to easily map through and render the cards
  const blocksData = [
    { id: 1, title: 'CEIT - 37 - 601A', imgSrc: 'https://placehold.co/400x400/409c91/ffffff?text=602P+BLOCK+GC' },
    { id: 2, title: 'CEIT - 37 - 601P', imgSrc: 'https://placehold.co/400x400/409c91/ffffff?text=602P+BLOCK+GC' },
    { id: 3, title: 'CEIT - 37 - 602A', imgSrc: 'https://placehold.co/400x400/409c91/ffffff?text=602P+BLOCK+GC' },
    { id: 4, title: 'CEIT - 37 - 601A', imgSrc: 'https://placehold.co/400x400/409c91/ffffff?text=602P+BLOCK+GC' },
    { id: 5, title: 'CEIT - 37 - 601P', imgSrc: 'https://placehold.co/400x400/409c91/ffffff?text=602P+BLOCK+GC' },
    { id: 6, title: 'CEIT - 37 - 602A', imgSrc: 'https://placehold.co/400x400/409c91/ffffff?text=602P+BLOCK+GC' },
  ];

  return (
    <div className="app-container">
      {/* Top Navigation Bar */}
      <header className="top-header">
        <div className="user-profile">
          <div className="avatar"></div>
          <span className="greeting">Hello, Admin Jude!</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        <h1 className="program-title">Bachelor of Information Technology</h1>
        <hr className="divider" />
        
        <h2 className="section-subtitle">Blocks</h2>

        {/* CSS Grid for the Cards */}
        <div className="blocks-grid">
          {blocksData.map((block) => (
            <div key={block.id} className="block-card">
              <h3 className="block-title">{block.title}</h3>
              <div className="image-container">
                <img src={block.imgSrc} alt={`Block ${block.title}`} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;