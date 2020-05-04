import React from 'react';
import StatusBadge from './components/StatusBadge';
import Button from './components/Button';

class Task extends React.Component {
  constructor() {
    super();
    this.state = {completed: false};
  }

  setTaskCompleted(done) {
    this.setState({completed: done});
  }
  
  toggleTask = () => {                                                      // explicity bind action handler to the context of that class
    this.setTaskCompleted(!this.state.completed);
  }

  render() {
    return (
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="border-b border-gray-200 px-4 py-5 sm:px-6 flex items-center justify-between">
          <h2 className={"mt-1 text-xl " + (this.state.completed ? 'text-gray-500' : '')}>{ this.props.title }</h2>
          <StatusBadge success={ this.state.completed } />
        </div>

        <div className={"px-4 py-5 sm:p-6 " + (this.state.completed ? 'text-gray-500' : '')}>
          { this.props.body }
        </div>

        <div onClick={ this.toggleTask } className="border-t border-gray-200 px-4 py-4 sm:px-6">
          <Button text={this.state.completed ? 'Reopen Task' : 'Complete Task'} />
        </div>
      </div>  
    );
  }
}
  
export default Task;
  