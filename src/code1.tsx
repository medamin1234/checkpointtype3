import React from 'react';

const Greeting: React.FC<{ name: string }> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;