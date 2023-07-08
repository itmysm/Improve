import TextArea from "./components/TextArea";
import Counter from "./components/Counters";
import Info from "./components/Info";
import React, { useState } from 'react';

function App() {
  const [content, setContent] = useState('')

  const onHandelNewContent = (val) => {
    setContent(val)
  }

  return (
    <div className="App min-h-[100vh] flex flex-col items-center justify-center bg-[#e6d2d2a2] py-5">
      <header className="App-header">
      </header>

      <Counter content={content} />
      <TextArea onGettingContent={onHandelNewContent} />
      <Info content={content} />
    </div>
  );
}

export default App;
