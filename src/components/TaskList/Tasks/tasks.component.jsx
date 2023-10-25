import React from 'react';
import InputBox from '../../InputBox/inputbox.component';
import { useState } from 'react';

const Tasks = () => {
    const [Tasks, setTasks] = useState(['']);
    console.log(Tasks);

    const onhandleSubmit = (inputValue) => {
        if(inputValue !== null && !Tasks.includes(inputValue)){
            // console.log(typeof(Tasks));
            setTasks([...Tasks, inputValue]);
        }
    }

    const onCompleted = (checkedValue) => {
        setTasks(Tasks.filter((item) => item !== checkedValue));
    }

    return (
        <div>
            {console.log("Rednered")}
            {Tasks.map((task) => {
                return (
                    // When we use map, we need to keep track of individual elements that gets rendered
                    // To do that, the parent element inside the map function should have a key value. So we are going to add div function and add a key element to it
                    // The key element should be unique in the state, and should not overlap, like ID or something.
                    <div key={task}>
                        <input 
                            type = "checkbox"
                            value = {task}
                            checked = {false}
                            onChange = {() => onCompleted(task)}
                        />
                        {task}
                    </div>
                )
            })}
            <InputBox onSubmit={onhandleSubmit} />

            {/* {Tasks.map((task) => {
                return task;
            }, () => {
                console.log("Added");
            })} */}
        </div>
    )
}

export default Tasks