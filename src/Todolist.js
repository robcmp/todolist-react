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
        <div className="d-flex justify-content-center">
            <div class="card" >

                <div class="card-body">
                    <h5 class="card-title">Todo List</h5>
                    <div>
                        <div className="input-group mb-3">
                            <input type="text" value={addTask} className="form-control" placeholder="Add to Do" aria-label="Add to Do" aria-describedby="button-addon2" onChange={valueChange} />
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addingToDo}>Add Task</button>
                        </div>

                        <ul className="list-group">
                            {
                                addList.map((li, key) => <li className="list-group-item list-group-item-info" key={key} >{li}<span className="ps-5"><button onClick={() => {
                                    deleteTask(key);
                                }}><i class="bi bi-x"></i></button></span></li>)
                            }
                        </ul>

                    </div >
                </div>
            </div>
        </div>

    );
}

export default TodoList;