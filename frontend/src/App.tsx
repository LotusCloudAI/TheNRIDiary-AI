import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { AdSlot } from './modules/ads/components/AdSlot';

// Page imports
import CategoryPage from './pages/CategoryPage';
import StatePage from './pages/StatePage';
import CityPage from './pages/CityPage';
import BusinessPage from './pages/BusinessPage';
import SubmitBusinessPage from './pages/SubmitBusinessPage';
import EventsPage from './pages/EventsPage';
import CommunityPage from './pages/CommunityPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

// Component imports
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          {/* Top Ad Slot */}
          <AdSlot position="top" />
          
          <Navigation />
          
          <main className="main-content">
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />
              
              {/* Category Routes */}
              <Route path="/category/:name" element={<CategoryPage />} />
              
              {/* Location Routes */}
              <Route path="/state/:stateName" element={<StatePage />} />
              <Route path="/city/:cityName" element={<CityPage />} />
              
              {/* Business Routes */}
              <Route path="/business" element={<BusinessPage />} />
              <Route path="/business/submit" element={<SubmitBusinessPage />} />
              
              {/* Events Routes */}
              <Route path="/events" element={<EventsPage />} />
              <Route path="/events/:category" element={<EventsPage />} />
              
              {/* Community Routes */}
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/community/groups" element={<CommunityPage />} />
              
              {/* Catch-all */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          
          {/* Sidebar Ad Slot */}
          <aside className="sidebar">
            <AdSlot position="sidebar" />
          </aside>
          
          {/* Bottom Ad Slot */}
          <AdSlot position="bottom" />
          
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
