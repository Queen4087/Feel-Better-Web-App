import React, { useState, useEffect } from 'react';

const Relaxation = () => {
  const [instruction, setInstruction] = useState('Breathe In');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      const cycle = () => {
        setInstruction('Breathe In');
        timer = setTimeout(() => {
          setInstruction('Hold');
          timer = setTimeout(() => {
            setInstruction('Breathe Out');
            timer = setTimeout(cycle, 4000);
          }, 4000);
        }, 4000);
      };
      cycle();
    } else {
      setInstruction('Ready?');
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <div className="glass-card fade-in" style={{ textAlign: 'center' }}>
      <h2>Relaxation Space</h2>
      <p style={{ color: 'var(--text-muted)' }}>Follow the circle to calm your mind.</p>
      
      <div className={isActive ? "breathe-circle" : ""} style={{ 
        width: '150px', height: '150px', border: '2px solid var(--primary)', 
        borderRadius: '50%', margin: '2rem auto', display: 'flex', 
        alignItems: 'center', justifyContent: 'center',
        background: isActive ? 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)' : 'transparent'
      }}>
        <span style={{ fontWeight: '600', color: 'var(--primary)' }}>{instruction}</span>
      </div>

      <button className="primary" onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Stop Exercise' : 'Start Breathing'}
      </button>

      <div style={{ marginTop: '2rem' }}>
        <h3>Calming Sounds</h3>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button style={{ background: '#e0f7fa' }}>🌊 Ocean</button>
          <button style={{ background: '#e8f5e9' }}>🍃 Forest</button>
          <button style={{ background: '#fff9c4' }}>🌧️ Rain</button>
        </div>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
          (Sound feature coming soon - visualization only)
        </p>
      </div>
    </div>
  );
};

export default Relaxation;
