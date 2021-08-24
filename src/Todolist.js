import React, { useState } from "react";

const TodoList = () => {
    let [addTask, setTask] = useState('');
    let [addList, setList] = useState([]);

    const addingToDo = (ev) => {
        setList([...addList, addTask]);
        setTask("");
    }

    const valueChange = (e) => {
        setTask(e.target.value);
    }

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" value={addTask} className="form-control" placeholder="Add to Do" aria-label="Add to Do" aria-describedby="button-addon2" onChange="" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick="">Button</button>
            </div>



        </div >

    );
}

export default TodoList;