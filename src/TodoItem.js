import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function TodoItem(props){
    const completedStyle = {
        fontStyle:"italic",
        color:"#cdcdcd",
        textDecoration:"line-through"
    }
    return(
        <div className="todo-item">
            <input type="checkbox"
            checked={props.item.completed} 
            onChange= {()=>props.handelChange(props.item.id)}
            />
            <label style={props.item.completed?completedStyle:null}> {props.item.text}</label>
            <FontAwesomeIcon className="trashIcon" icon="trash" onClick={ () => props.deleteTodoItem(props.item.id)}/>
        </div>
    );
}

export default TodoItem;