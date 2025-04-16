import React from 'react';
import Chat from './components/chat';

function App() {
  return (
    <div style={styles.app}>
      <h1 style={styles.header}>😽 AI Chat App</h1>
      <Chat />
    </div>
  );
}

const styles = {
  app: {
    backgroundColor: '#355C7D',
    minHeight: '100vh',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    color: '#FFB347',
    marginBottom: '1.5rem',
  }
};

export default App;
