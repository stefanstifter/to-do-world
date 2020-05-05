import React from 'react';
import PageHeader from './components/PageHeader';
import Task from './Task';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto py-12">
        <PageHeader />        
        <div className="mt-6">
          <Task title="Do the laundry" body="sort, wash and hang it up to dry." />        
        </div>
      </div>
    </div>
  );
}

export default App;
