import React from 'react';
import Card from './Card';
import Button from './Button';

function TaskCreate(props) {
  return (
    <Card
      header={<h2 className="text-xl text-teal-900">Create a new Task!</h2>}
      body={
        <form>
          <div className="grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="title" className="block text-sm font-medium leading-5 text-gray-700">
                Task title
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input id="title" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" autoFocus />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="description" className="block text-sm font-medium leading-5 text-gray-700">
                Task description
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <textarea id="description" rows="3" className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">Try to describe the task as detailed as possible.</p>
            </div>      
          </div>
          <div className="mt-4 flex justify-end">
            <Button 
              onClick={ props.onCreate }
              text="Create a new Task"
            />
          </div>
        </form>
      }
    />
  );
}

export default TaskCreate;
