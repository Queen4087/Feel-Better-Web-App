import React from 'react';

const Footer = () => {
  return (
    <footer className="glass-card fade-in" style={{ marginTop: '4rem', background: 'rgba(232, 245, 233, 0.9)', border: 'none' }}>
      <div style={{ textAlign: 'center' }}>
        <h3>Thinking of you. 💖</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          If you're feeling overwhelmed, please remember that it's okay to reach out. Talk to a friend, family member, or a professional.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{ background: '#388e3c', color: 'white' }}>Crisis Hotline</button>
          <button style={{ background: '#0288d1', color: 'white' }}>Talk to a Professional</button>
          <button style={{ border: '2px solid #66bb6a', background: 'transparent' }}>Self-Care Guide</button>
        </div>
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          © 2026 Feel Better App. Created with love.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
