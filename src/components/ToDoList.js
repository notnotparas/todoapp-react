import React from 'react';

const Todo = ({todo, remove,complete}) => {
    return (
        <div className={todo.completed?"greenitemcontainer":"reditemcontainer"}>
            <span className="todoItem" onClick={()=>(remove(todo.id))}>{todo.text}</span>
            <button className="compButton" onClick={()=>(complete(todo.id))}>&#10004;</button>
            <button className="delButton" onClick={()=>(remove(todo.id))}>&#10008;</button>
        </div>
    );
};
  
const TodoList = ({todos, remove,complete}) => {
const todoItems = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove} complete={complete}/>)
});
return (<div>{todoItems}</div>);
};

export default TodoList;