import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800">
            <svg className="-ml-1 mr-1.5 h-2 w-2 text-red-400" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
            <span className="ml-2">
              not done yet
            </span>
          </span>
          <h2 className="mt-1 text-xl">
            { this.props.title }
          </h2>
        </div>
        <div className="px-4 py-5 sm:p-6">
          { this.props.body }
        </div>
        <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
        <span className="inline-flex rounded-md shadow-sm">
          <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
            complete
          </button>
        </span>
        </div>
      </div>  
    );
  }
}
  
export default Task;
  