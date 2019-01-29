import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
           editing: false
        }
    }

    render() {
        return(
            <li className="todo-item">
                 {this.renderTodoItem()}
            </li>
        )
    }

    renderTodoItem(){
        if(this.state.editing) {
            return (
                <form className="todo-item-wrapper" >
                    <input className="editing-form-input" type="text" ref="editingItem"   defaultValue={this.props.item.name} onFocus={this.handleFocus.bind(this)} autoFocus />
                    {this.renderButtons()}
                </form>
            )
        }
        return (
            <div className="todo-item-wrapper">
                <p>{this.props.item.name}</p>
               {this.renderButtons()}
            </div>
        )
    }

    renderButtons() {
        if(this.state.editing) {
            return(
                <div>
                    <button className="button" type="button"  onClick={this.handleSave.bind(this)} > save </button>
                    <button className="button" type="button" onClick={this.onCancel.bind(this)} > cancel </button>
                </div>
            )
        }
        return(
            <div>
                <button className="button" type="button" onClick={this.onEdit.bind(this)} > edit </button>
                <button className="button" type="button" onClick={this.props.onDelete.bind(this, this.props.item)} > delete </button>
            </div>
        )
    }

    onEdit(){
        this.setState ({
            editing: true
        })
    }

    onCancel(){
        this.setState ({
            editing: false
        })
    }
    handleSave(e){
        this.setState ({
            editing: false
        })
        this.props.onSave(this.props.item, this.refs.editingItem.value)
    }
    handleFocus(e){
        e.target.select()
    }

}

export default TodoItem ;
