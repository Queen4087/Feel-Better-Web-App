import React, { useState } from 'react';

const MiniGame = () => {
  const [bubbles, setBubbles] = useState([]);
  const [score, setScore] = useState(0);

  const addBubble = () => {
    const id = Date.now();
    const x = Math.random() * 80 + 10; // 10-90%
    const y = Math.random() * 80 + 10;
    setBubbles(prev => [...prev, { id, x, y }]);
  };

  const popBubble = (id) => {
    setBubbles(prev => prev.filter(b => b.id !== id));
    setScore(s => s + 1);
  };

  return (
    <div className="glass-card fade-in" style={{ textAlign: 'center' }}>
      <h2>Pop the Stress</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
        Pop as many bubbles as you want. It's oddly satisfying.
      </p>
      
      <div style={{ 
        height: '300px', background: '#f8f9fa', borderRadius: '16px', 
        position: 'relative', overflow: 'hidden', border: '1px solid #eee' 
      }}>
        {bubbles.map(b => (
          <div 
            key={b.id}
            onClick={() => popBubble(b.id)}
            style={{
              position: 'absolute',
              left: `${b.x}%`,
              top: `${b.y}%`,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(92, 107, 192, 0.4)',
              border: '2px solid var(--primary)',
              cursor: 'pointer',
              transform: 'translate(-50%, -50%)',
              animation: 'fadeIn 0.3s ease-out'
            }}
          />
        ))}
        {bubbles.length === 0 && (
          <div style={{ paddingTop: '130px', color: '#999' }}>
            Click "Add Bubbles" to start!
          </div>
        )}
      </div>

      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p>Popped: <strong>{score}</strong></p>
        <button className="primary" onClick={addBubble}>Add Bubbles</button>
      </div>
    </div>
  );
};

export default MiniGame;
