import React from 'react';

function AddNewTodoItem(props){
    return(
        <div>
            <form onSubmit={props.formOnSubmit}>
                <input type="text" value={props.item.text} placeholder="todo" onChange={props.formFieldChange}/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddNewTodoItem;