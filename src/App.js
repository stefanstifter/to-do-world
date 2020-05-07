import React from 'react';
import Task from './Task';
import PageHeader from './components/PageHeader';
import TaskCreateForm from './components/TaskCreateForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {tasks: this.receiveInitialTasksData()};

    this.updateTasks = this.updateTasks.bind(this);
  }
  
  render() {
    let taskList = this.state.tasks.map((task) => {
      return <Task title={ task.title } body={ task.body } key={ task.id }/> 
    })
  
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto py-12">
          <PageHeader />
          <div className="mt-6 mb-20">
            <TaskCreateForm onCreate={ this.updateTasks } />
          </div>
          { taskList }
        </div>
      </div>
    );
  }

  updateTasks(data) {
    this.setState(prevState => ({
      tasks: [{id:99, title: data.title, body: data.description}, ...prevState.tasks]
    }));
  }

  receiveInitialTasksData() {
    return [
      {id:1, title: "Do the laundry", body: "Sort, wash and hang it up to dry."},
      {id:2, title: "Go To Work", body: "Some additional..."},
      {id:3, title: "Go To School", body: "Some additional..."},
    ];
  }
}

export default App;
