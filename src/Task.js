import React from 'react';
import StatusBadge from './components/StatusBadge';
import Button from './components/Button';

class Task extends React.Component {
  render() {
    return (
      <div className="bg-white overflow-hidden shadow rounded-lg">
        
        {/* Task Header */}
        <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
          <StatusBadge />
          <h2 className="mt-1 text-xl">{ this.props.title }</h2>
        </div>

        {/* Task Body */}
        <div className="px-4 py-5 sm:p-6">
          { this.props.body }
        </div>

        {/* Task Footer */}
        <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
          <Button />
        </div>
        
      </div>  
    );
  }
}
  
export default Task;
  