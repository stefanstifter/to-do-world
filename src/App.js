import React from 'react';
import PageHeader from './components/PageHeader';
import Task from './Task';

function App() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gray-300 min-h-screen">
      <PageHeader />

      <div className="mt-6">
        <Task title="Do the laundry" body="sort, wash and hang it up to dry." />        
      </div>
    </div>
  );
}

export default App;
