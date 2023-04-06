import React from "react";

function TodoBox(props){
    const updateTask = (e) =>{
        props.setNewTask(e.target.value)
    }
    return (
        <div className="TodoInputBox">
            <input onChange={updateTask} />
        </div>
    )
}

export default TodoBox;