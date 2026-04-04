import React from 'react';

const Hero = () => {
  return (
    <section className="fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>You deserve to feel good.</h2>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
        Welcome to your safe space. Whether you're feeling sad, stressed, or just need a moment of peace, we're here for you. Explore our tools below to help lift your spirits.
      </p>
    </section>
  );
};

export default Hero;
