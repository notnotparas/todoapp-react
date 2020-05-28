import React,{Component} from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

window.id = 0;

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
          data: []
        }
    }
    addTodo(val){
        const todo = {text: val, id: window.id++,completed:false}
        this.state.data.push(todo);
        this.setState({data: this.state.data});
    }
    handleDelete(id){
        const remaining = this.state.data.filter((todo) => {
        if(todo.id !== id){
            return todo;
        }
        });
        this.setState({data: remaining});
    }
    handleComplete(id){
        let newTodos = this.state.data;
        newTodos.forEach(function(todo){
            if (todo.id == id){
                if (todo.completed){
                    todo.completed = false; 
                }
                else if (!todo.completed) {
                    todo.completed = true;  
                }
            }
        })
        console.log(newTodos);
        this.setState({
            data:newTodos
        });
    }
    render(){
        return(
        <div>
            <ToDoForm addTodo={this.addTodo.bind(this)}/>
            <ToDoList 
                todos={this.state.data} 
                remove={this.handleDelete.bind(this)}
                complete={this.handleComplete.bind(this)}
            />
        </div>
        );
    }
};

export default Main;