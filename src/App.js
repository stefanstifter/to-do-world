import React from 'react';
import PageHeader from './components/PageHeader';
import Task from './Task';

function App() {
  const data = [
    {id:1, title: "Do the laundry", body: "Sort, wash and hang it up to dry."},
    {id:2, title: "Go To Work", body: "Some additional..."},
    {id:3, title: "Go To School", body: "Some additional..."},
  ];

  let taskList = data.map((task) => {
    return <Task title={ task.title } body={ task.body } key={ task.id }/> 
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto py-12">
        <PageHeader />        
        <div className="mt-6">
          { taskList }
        </div>
      </div>
    </div>
  );
}

export default App;
