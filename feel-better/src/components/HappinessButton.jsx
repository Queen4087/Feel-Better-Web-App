import React, { useState } from 'react';
import { api } from '../utils/api';

const HappinessButton = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateRandom = async () => {
    setLoading(true);
    try {
      const data = await api.get('motivational-content/random');
      setContent(data);
    } catch (error) {
      console.error('Failed to fetch happiness:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card fade-in" style={{ textAlign: 'center' }}>
      <h2>Random Happiness</h2>
      <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
        Need a little boost? Click the button below for a surprise.
      </p>
      <button className="primary" onClick={generateRandom} disabled={loading}>
        {loading ? 'Fetching Joy...' : 'Get Happy!'}
      </button>
      {content && (
        <div className="fade-in" style={{ marginTop: '2rem', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.5)', border: '1px solid var(--primary-light)' }}>
          <p style={{ fontStyle: content.type === 'quote' ? 'italic' : 'normal', fontSize: '1.2rem' }}>
            "{content.text}"
          </p>
          <small style={{ color: 'var(--text-muted)', textTransform: 'capitalize' }}>— {content.type}</small>
        </div>
      )}
    </div>
  );
};

export default HappinessButton;
