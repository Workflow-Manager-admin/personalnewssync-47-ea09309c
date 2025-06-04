import React, { useState, useEffect } from 'react';
import './MainContainer.css';

// PUBLIC_INTERFACE
function MainContainer() {
  /**
   * This is the main container for PersonalNewsSync.
   * Features:
   * - Top navigation bar (categories/settings)
   * - Card-based article feed
   * - Theming (primary/secondary/accent)
   * - Responsive/adaptive layout
   * - Placeholders for Adaptive Content, Analytics, Notifications
   */

  // Theme could be further extended for dynamic theming
  const [theme, setTheme] = useState({
    primary: '#1A73E8',
    secondary: '#F5F5F5',
    accent: '#FF7043',
  });

  // For demo: dummy categories and articles
  const categories = ['Top Stories', 'Tech', 'Business', 'Sports', 'Health'];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const articles = [
    {
      id: 1,
      title: 'AI-driven News Personalization on the Rise',
      summary:
        'Personalized news feeds are leveraging AI to deliver more relevant content to users, increasing engagement and session time.',
      source: 'TechWorld',
      image:
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      title: 'Global Markets Rally Amid Tech Surge',
      summary:
        'Markets worldwide are experiencing a surge, fueled by advancements and optimism in the technology sector.',
      source: 'MarketWatch',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      timestamp: '1 hour ago',
    },
    {
      id: 3,
      title: 'Wellness Apps Transforming Healthcare',
      summary:
        'Mobile health and wellness apps are democratizing access, empowering users to take charge of their health data.',
      source: 'HealthLine',
      image:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      timestamp: '30 min ago',
    },
  ];

  // Placeholder effect for behavioral analytics
  useEffect(() => {
    // Example: Track when user views the main feed
    // analytics.track('FeedView');
  }, [selectedCategory]);

  // Placeholder: Display notification if any (personalized notifications)
  // This is a static placeholder for future live notification logic
  const notification = null; // Example: { message: "Check today's top stories!", type: 'info' }

  return (
    <div className="pns-main-container" style={{ background: theme.secondary }}>
      <NavBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        theme={theme}
      />
      <div className="pns-content-root">
        <div className="pns-status-row">
          {/* Placeholder for personalized notification */}
          {notification && (
            <NotificationBar notification={notification} theme={theme} />
          )}
        </div>
        {/* PLaceholder: Could eventually be replaced with real adaptive content */}
        <ArticleFeed articles={articles} theme={theme} />
      </div>
      {/* Placeholder: Could show analytics, engagement meters, etc. */}
      <div className="pns-footer-placeholder">
        <span className="pns-footer-placeholder__text">
          <span role="img" aria-label="⚡">
            ⚡
          </span>{' '}
          Analytics & Engagement Features Coming Soon!
        </span>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function NavBar({ categories, selectedCategory, onCategoryChange, theme }) {
  // Top navigation with app title, categories, and settings
  return (
    <nav
      className="pns-navbar"
      style={{ background: theme.primary, color: theme.secondary }}
    >
      <div className="pns-navbar__section pns-navbar__logo">
        <span className="pns-logo-symbol" style={{ color: theme.accent }}>
          <b>⦿</b>
        </span>
        <span className="pns-logo-text">PersonalNewsSync</span>
      </div>
      <div className="pns-navbar__section pns-navbar__categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`pns-cat-btn${
              selectedCategory === cat ? ' active' : ''
            }`}
            onClick={() => onCategoryChange(cat)}
            style={{
              background: selectedCategory === cat ? theme.accent : 'transparent',
              color: selectedCategory === cat ? theme.secondary : theme.secondary,
              border:
                selectedCategory === cat
                  ? `2px solid ${theme.secondary}`
                  : 'none',
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="pns-navbar__section pns-navbar__settings">
        <button
          className="pns-settings-btn"
          title="Settings (coming soon)"
          style={{
            color: theme.secondary,
            background: 'rgba(0,0,0,0.04)',
            border: 'none',
          }}
        >
          <span role="img" aria-label="settings">
            ⚙️
          </span>
        </button>
      </div>
    </nav>
  );
}

// PUBLIC_INTERFACE
function ArticleFeed({ articles, theme }) {
  // Card-based feed of articles
  return (
    <section className="pns-article-feed">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} theme={theme} />
      ))}
    </section>
  );
}

// PUBLIC_INTERFACE
function ArticleCard({ article, theme }) {
  return (
    <article className="pns-article-card">
      <div
        className="pns-card-img"
        style={{
          backgroundImage: article.image
            ? `url(${article.image})`
            : undefined,
          backgroundColor: theme.primary,
        }}
      ></div>
      <div className="pns-card-content">
        <h3 className="pns-card-title">{article.title}</h3>
        <div className="pns-card-summary">{article.summary}</div>
        <div className="pns-card-meta">
          <span className="pns-card-source">{article.source}</span>
          <span className="pns-card-dot">•</span>
          <span className="pns-card-time">{article.timestamp}</span>
        </div>
      </div>
    </article>
  );
}

// PUBLIC_INTERFACE
function NotificationBar({ notification, theme }) {
  return (
    <div
      className={`pns-notification pns-notification--${notification.type || 'info'}`}
      style={{
        background: theme.accent,
        color: theme.secondary,
      }}
    >
      {notification.message}
    </div>
  );
}

export default MainContainer;
