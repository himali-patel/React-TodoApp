import React, { Component } from 'react';
import AddItem from './AddItem';
import TodoItem from './TodoItem';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      todoItems:[]
    }
 
  }

  render() {
    let items =this.state.todoItems;
    items = items.map((item, index) => {
      return(<TodoItem item={item} key={index}  onDelete={this.onDelete.bind(this)} onSave={this.onSave.bind(this)} />)
        });
      return (
      <div className="App">
      
        <div>          
                <h1 className="header"> React Todo App with Edit </h1>
                <AddItem onAdd={this.onAdd.bind(this)} items={this.state.todoItems}/>
                <ul className="todo-list">
                  {items}
                </ul>
            </div>
      </div>
    );
  }
  onAdd(newTaskName) {
    var updatedItems = this.state.todoItems;
    updatedItems.push({
        name: newTaskName     
    });
    this.setState({
        todoItems: updatedItems
    })
    console.log(updatedItems);
}
  onDelete(item){
   var updatedItems = this.state.todoItems; 
   var index = updatedItems.indexOf(item);
   console.log(index);
    if(index > -1){
      updatedItems.splice(index , 1);
    }
    this.setState({
        todoItems: updatedItems
    });
  }
  onSave(oldItem, newName) {
    var thisItem = this.state.todoItems.filter((item) => item === oldItem)[0];
    thisItem.name = newName;
    this.setState({
        todoItems: this.state.todoItems
    })
}


}

export default App;
