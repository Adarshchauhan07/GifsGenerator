import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';

const App = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-gray-200 rounded-md shadow-md max-w-screen-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Explore Random GIFs</h2>
      <div className="grid grid-cols-2 gap-8">
        <Random />
        <Tag />
      </div>
    </div>
  );
};

export default App;
