import { useState, useEffect } from 'react';

interface CardProps {
  prompt: string;
}

const Card: React.FC<CardProps> = ({ prompt }) => {
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    // Generate a random pastel color
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 30) + 70; // 70-100%
    const lightness = Math.floor(Math.random() * 20) + 70; // 70-90%
    setBackgroundColor(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
  }, [prompt]);

  return (
    <div
      className="card"
      style={{
        backgroundColor,
        minHeight: '300px',
        margin: '20px',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <p
        style={{
          fontSize: '24px',
          color: '#333',
          textAlign: 'center',
          margin: 0,
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          lineHeight: 1.5,
        }}
      >
        {prompt}
      </p>
    </div>
  );
};

export default Card; 