import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/Demo';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevState) => !prevState);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput onShow={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
