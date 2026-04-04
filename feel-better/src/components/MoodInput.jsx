import React, { useState } from 'react';
import { api } from '../utils/api';

const MoodInput = () => {
  const [mood, setMood] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMoodSelect = async (selectedMood) => {
    setMood(selectedMood);
    setLoading(true);
    try {
      const data = await api.get(`mood-responses/${selectedMood}`);
      setResponse(data ? data.message : "I'm here for you, no matter how you feel. 💖");
    } catch (error) {
      console.error('Failed to fetch mood response:', error);
      setResponse("I'm here for you. 💖");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card fade-in">
      <h2>How are you feeling?</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', margin: '1.5rem 0' }}>
        <button onClick={() => handleMoodSelect('sad')} style={{ background: 'var(--mood-sad)', color: '#1565c0' }}>😢 Sad</button>
        <button onClick={() => handleMoodSelect('stressed')} style={{ background: 'var(--mood-stressed)', color: '#d84315' }}>😫 Stressed</button>
        <button onClick={() => handleMoodSelect('anxious')} style={{ background: '#e1bee7', color: '#6a1b9a' }}>😰 Anxious</button>
        <button onClick={() => handleMoodSelect('tired')} style={{ background: '#cfd8dc', color: '#37474f' }}>😴 Tired</button>
        <button onClick={() => handleMoodSelect('neutral')} style={{ background: '#f5f5f5', color: '#424242' }}>😐 Neutral</button>
        <button onClick={() => handleMoodSelect('happy')} style={{ background: 'var(--mood-happy)', color: '#fbc02d' }}>😊 Happy</button>
      </div>
      
      {response && (
        <div className="fade-in" style={{ padding: '1.5rem', borderRadius: '16px', background: 'white', borderLeft: '6px solid var(--primary)' }}>
          <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>{response}</p>
        </div>
      )}

      <div style={{ marginTop: '1.5rem' }}>
        <textarea 
          placeholder="Feel like writing more? Type here..."
          style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', fontFamily: 'inherit', minHeight: '100px' }}
        ></textarea>
      </div>
    </div>
  );
};

export default MoodInput;
