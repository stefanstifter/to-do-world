import React from 'react';
import Card from './components/Card';
import Button from './components/Button';
import StatusBadge from './components/StatusBadge';

class Task extends React.Component {
  constructor() {
    super();
    this.state = {completed: false};

    // explicity bind function to a component instance <https://reactjs.org/docs/faq-functions.html>
    this.toggleTask = this.toggleTask.bind(this);
  }

  setTaskCompleted(done) {
    this.setState({completed: done});
  }
  
  toggleTask() {
    this.setTaskCompleted(!this.state.completed);
  }

  render() {
    return (
      <Card 
        header={
          <div className="flex items-center justify-between">
            <h2 className={"mt-1 text-xl " + (this.state.completed ? 'text-gray-500' : '')}>{ this.props.title }</h2>
            <StatusBadge success={ this.state.completed } />
          </div>
        }
        body={ 
          <span className={ this.state.completed ? 'text-gray-500' : '' }>
            { this.props.body } 
          </span>
        }
        footer={
          <Button 
            text={this.state.completed ? 'Reopen Task' : 'Complete Task'} 
            onClick={ this.toggleTask }
          />
        }
      />
    );
  }
}
  
export default Task;
