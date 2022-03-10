import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/Demo';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  function toggleParagraphHandler() {
    setShowParagraph((prevState) => !prevState);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput onShow={false} />
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
