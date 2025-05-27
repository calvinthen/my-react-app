import React, { useReducer } from 'react'

export default function ManagingStateAddEditDeleteTask(){
    const [task, setTask] = useReducer(
        taskReducer,
        initialTasks
    );

    function handleAddTask(text){
        
    }
}
