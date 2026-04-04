import React from 'react';

const Header = () => {
  return (
    <header className="fade-in" style={{ width: '100%', padding: '1rem 2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--primary)', letterSpacing: '-1px' }}>
        Feel Better ✨
      </h1>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#happiness" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: '500' }}>Joy</a>
        <a href="#mood" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: '500' }}>Mood</a>
        <a href="#relax" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: '500' }}>Relax</a>
        <a href="#journal" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: '500' }}>Journal</a>
      </div>
    </header>
  );
};

export default Header;
