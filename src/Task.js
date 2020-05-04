import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
          { this.props.title }
        </div>
        <div class="px-4 py-5 sm:p-6">
          { this.props.body }
        </div>
      </div>  
    );
  }
}
  
export default Task;
  