import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const data = await api.get('journal-entries');
      setEntries(data);
    } catch (error) {
      console.error('Failed to fetch entries:', error);
    }
  };

  const saveEntry = async () => {
    if (!currentEntry.trim()) return;
    setLoading(true);
    try {
      const newEntry = await api.post('journal-entries', { content: currentEntry });
      setEntries([newEntry, ...entries]);
      setCurrentEntry('');
    } catch (error) {
      console.error('Failed to save entry:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteEntry = async (id) => {
    try {
      await api.delete(`journal-entries/${id}`);
      setEntries(entries.filter(e => e.id !== id));
    } catch (error) {
      console.error('Failed to delete entry:', error);
    }
  };

  return (
    <div className="glass-card fade-in">
      <h2>Private Journal</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        Write down whatever is on your mind. Your thoughts are saved locally and stay private.
      </p>

      <textarea 
        value={currentEntry}
        onChange={(e) => setCurrentEntry(e.target.value)}
        placeholder="Dear Journal..."
        style={{ 
          width: '100%', padding: '1rem', borderRadius: '12px', 
          border: '1px solid #ddd', fontFamily: 'inherit', minHeight: '120px',
          marginBottom: '1rem'
        }}
      ></textarea>

      <div style={{ textAlign: 'right' }}>
        <button className="primary" onClick={saveEntry} disabled={loading}>
          {loading ? 'Saving...' : 'Save Entry'}
        </button>
      </div>

      <div style={{ marginTop: '2rem', maxHeight: '300px', overflowY: 'auto' }}>
        {entries.map(e => (
          <div key={e.id} style={{ 
            padding: '1rem', background: 'white', borderRadius: '12px', 
            marginBottom: '1rem', border: '1px solid #eee', position: 'relative' 
          }}>
            <small style={{ color: 'var(--text-muted)' }}>{new Date(e.created_at).toLocaleString()}</small>
            <p style={{ marginTop: '0.5rem', whiteSpace: 'pre-wrap' }}>{e.content}</p>
            <button 
              onClick={() => deleteEntry(e.id)}
              style={{ 
                position: 'absolute', top: '10px', right: '10px', 
                background: 'transparent', color: '#ff5252', padding: '5px' 
              }}
            >
              ✕
            </button>
          </div>
        ))}
        {entries.length === 0 && (
          <p style={{ textAlign: 'center', color: '#999', padding: '2rem' }}>No entries yet. Start writing when you're ready.</p>
        )}
      </div>
    </div>
  );
};

export default Journal;
