import React from "react";

function Button(props){
    return (
    <div className="Button">
    <button onClick={()=>{
        const task = {
            id: props.taskList.length === 0 ? 1 : props.taskList.length+1,
            description: props.newTaskInput,
            completed: false,
        }
        props.setTaskList([...props.taskList,task])
    }}>
      Submit
    </button>
  </div>
  )
}

export default Button;