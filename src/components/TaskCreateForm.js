import React from 'react';
import Card from './Card';
import ButtonSubmit from './ButtonSubmit';

class TaskCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', description: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.onCreate(this.state);
    this.setState({title: '', description: ''});
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});  
  }

  render() {
    return (
      <Card
        header={<h2 className="text-xl text-teal-900">Create a new Task!</h2>}
        body={
          <form onSubmit={ this.handleSubmit }>
            <div className="grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label htmlFor="title" className="block text-sm font-medium leading-5 text-gray-700">
                  Task title
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input 
                    value={ this.state.title }
                    onChange={ this.handleChange }
                    name="title" id="title" 
                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                    required
                    autoFocus
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label htmlFor="description" className="block text-sm font-medium leading-5 text-gray-700">
                  Task description
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <textarea
                    value={ this.state.description } 
                    onChange={ this.handleChange }
                    className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                    name="description" id="description" 
                    rows="3" 
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">Try to describe the task as detailed as possible.</p>
              </div>      
            </div>
            <div className="mt-4 flex justify-end">
              <ButtonSubmit>Create Task</ButtonSubmit>
            </div>
          </form>
        }
      />
    );
  }
}

export default TaskCreateForm;
