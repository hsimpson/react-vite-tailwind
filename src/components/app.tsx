import React from 'react';

const App = () => {
  const onClick = () => {
    alert('Hello, React!');
  };

  return (
    <div className="p-4">
      <h1>Hello, React!</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};

export default App;
