import React from 'react';

const TodoForm = ({addTodo}) => {
    let inputEle;
    return (
      <div className="todoformcontainer">
        <input type="text" ref={(a) => {
          inputEle = a;
        }} />
        <button className ="addButton" onClick={() => {
          if(inputEle.value !== ''){
            addTodo(inputEle.value);
          }
          else{
            alert("Todo cannot be empty");
          }
          
          inputEle.value = '';
        }}>
          &#10010;
        </button>
      </div>
    );
};

export default TodoForm;