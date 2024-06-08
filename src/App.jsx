import React, { useRef } from 'react';

function App() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` указывает на смонтированный элемент input
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}

export default App