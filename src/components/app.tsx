import React from 'react';

const App = () => {
  const onClick = () => {
    alert('Hello, React!');
  };

  return (
    <div>
      <h1>Hello, React!</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};

export default App;
