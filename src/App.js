import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    // Count characters whenever summary changes
    setCharCount(summary.length);
  }, [summary]);

  const summarize = async () => {
    // Add your summarization logic here or make an API call to the server-side implementation.
    // Update the 'summary' state with the result.

    // For example, a simple placeholder summarization:
    const summarizedText = 'This is a summarized version of the input text.';
    setSummary(summarizedText);

    // Count words in the summarized text
    const words = summarizedText.split(/\s+/).filter((word) => word.length > 0);
    setWordCount(words.length);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Text Summarizer</h1>
        <div className="textarea-container">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste your text here..."
            className="input-textarea"
          ></textarea>
          <button onClick={summarize} className="summarize-btn">
            Summarize
          </button>
          <textarea
            value={summary}
            readOnly
            placeholder="Summary will appear here..."
            className="summary-textarea"
          ></textarea>
          <span className="word-count">Word Count: {wordCount}</span>
          <span className="char-count">Character Count: {charCount}</span>
        </div>
      </header>
    </div>
  );
}

export default App;
