import React, { Component } from 'react';

class AddItem extends Component{
    constructor(props) {
        super(props)
        this.state = {
            tasks:'',
            todoItems:[]
        }
    }
    render() {
        return(
            <form className="add-item-form" onSubmit = {this.handleSubmit.bind(this)} >
                <input className="add-item-input" type="text" placeholder="a new task to do..." value = {this.state.tasks} onChange={this.handleChange.bind(this)} />
                <input className="add-item-button" type="submit" value="add"   />            
            </form>
    )
  }
  handleChange(event){
    this.setState({
      tasks: event.target.value
     });
  }
  handleSubmit(event){
    event.preventDefault();
    const current_task = this.state.tasks;
    const newItemList  = this.state.todoItems.concat(current_task) ;
    this.props.onAdd(newItemList);
    this.setState({     
        tasks: ''
    })

  }
}

export default AddItem;