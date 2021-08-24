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

    const deleteTask = (key) => {
        setList(addList.filter((item, index) => index !== key));
    }

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" value={addTask} className="form-control" placeholder="Add to Do" aria-label="Add to Do" aria-describedby="button-addon2" onChange={valueChange} />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addingToDo}>Button</button>
            </div>

            <ul>
                {
                    addList.map((li, key) => <li key={key} onClick={() => {
                        deleteTask(key);
                    }}>{li}</li>)
                }
            </ul>

        </div >

    );
}

export default TodoList;