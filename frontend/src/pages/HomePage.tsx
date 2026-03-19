import React from 'react';
import { Link } from 'react-router-dom';
import { mockStories } from '../data/mockStories';
import { businesses } from '../data/businesses';
import { events } from '../data/events';
import { communityGroups } from '../data/community';

export default function HomePage() {
  const recentStories = mockStories.slice(0, 3);
  const featuredBusinesses = businesses.slice(0, 3);
  const upcomingEvents = events
    .filter(e => e.date >= new Date().toISOString())
    .slice(0, 3);

  return (
    <div className="home-page">
      <section className="hero">
        <h1>The NRI Diary</h1>
        <p>Your connection to the Indian community in the USA</p>
      </section>
      
      <section className="featured-stories">
        <h2>Latest Stories</h2>
        <div className="story-grid">
          {recentStories.map(story => (
            <div key={story.id} className="story-card">
              <h3>{story.title}</h3>
              <p>{story.category} • {story.city}, {story.state}</p>
              <Link to={`/category/${story.category}`}>Read More</Link>
            </div>
          ))}
        </div>
      </section>
      
      <section className="featured-businesses">
        <h2>Featured Businesses</h2>
        <div className="business-grid">
          {featuredBusinesses.map(business => (
            <div key={business.id} className="business-card">
              <h3>{business.name}</h3>
              <p>{business.category}</p>
              <p>{business.city}, {business.state}</p>
            </div>
          ))}
        </div>
        <Link to="/business" className="view-all">View All Businesses →</Link>
      </section>
      
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="events-list">
          {upcomingEvents.map(event => (
            <div key={event.id} className="event-item">
              <h3>{event.title}</h3>
              <p>{new Date(event.date).toLocaleDateString()} • {event.location}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="community-cta">
        <h2>Join the Community</h2>
        <p>Connect with {communityGroups.reduce((acc, g) => acc + g.members, 0)} members</p>
        <Link to="/community" className="cta-button">Explore Groups</Link>
      </section>
    </div>
  );
}
