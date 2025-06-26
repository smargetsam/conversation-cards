import { useState } from 'react'
import Card from './components/Card'
import './App.css'

const conversationPrompts = [
  "What's your favorite childhood memory?",
  "If you could have dinner with anyone from history, who would it be and why?",
  "What's the most valuable life lesson you've learned so far?",
  "What's your biggest dream or aspiration?",
  "If you could live anywhere in the world, where would you choose?",
  "What's a skill you'd love to master?",
  "What's the best piece of advice you've ever received?",
  "What's a challenge you're proud of overcoming?",
  "If you could instantly become an expert in one subject, what would it be?",
  "What's something that always makes you laugh?",
  "What's the most beautiful place you've ever been to?",
  "What's a tradition you'd like to pass down to future generations?",
  "What's a book or movie that changed your perspective on life?",
  "What's your idea of a perfect day?",
  "What's something you're looking forward to in the future?"
];

function App() {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const showNextPrompt = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPromptIndex((prevIndex) => 
          prevIndex === conversationPrompts.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: '#f5f5f5',
      }}
    >
      <h1
        style={{
          color: '#333',
          marginBottom: '40px',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Conversation Cards
      </h1>
      <div
        onClick={showNextPrompt}
        style={{
          transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
          transition: 'transform 0.3s ease',
          width: '100%',
          maxWidth: '600px',
        }}
      >
        <Card prompt={conversationPrompts[currentPromptIndex]} />
      </div>
      <p
        style={{
          color: '#666',
          marginTop: '20px',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Tap the card to see the next prompt
      </p>
    </div>
  )
}

export default App
