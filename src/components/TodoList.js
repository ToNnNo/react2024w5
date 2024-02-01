import { useReducer, useRef, useState } from "react";
import Button from "./Button/Button";
import Icon from "./Button/Icon";

function reducer(tasks, action) {

    switch(action.type) {
        case 'add':
            if(action.name.trim() !== '') {
                const newTask = { id: Date.now(), name: action.name, inProgress: true }
                return [...tasks, newTask];
            }
            return tasks;
        case 'delete':
            return tasks.filter( task => task.id !== action.id )
        case 'progress':
            return tasks.map( task => {
                if(task.id === action.id) {
                    return { ...task, inProgress: !task.inProgress }
                }

                return task;
            } )
        default:
            return tasks;
    }
}

export default function TodoList() {

    const [tasks, dispatch] = useReducer(reducer, [
        { id: 1, name: 'Créer une liste de tache', inProgress: false },
        { id: 2, name: 'Ajouter une tache', inProgress: true },
        { id: 3, name: 'Terminer une tache', inProgress: true },
        { id: 4, name: 'Supprimer une tache', inProgress: true },
    ])

    const [task, setTask] = useState('');
    const input = useRef(); // docuement.querySelector()

    function changeData(e) {
        const value = e.target.value;

        setTask(value);
    }

    function addTask(e) {
        e.preventDefault();

        dispatch({ type: "add", name: task });
        setTask('');
        input.current.focus();
    }

    function deleteTask(task) {
        if( !task.inProgress ) {
            dispatch({ type: "delete", id: task.id });
        }
    }

    function toggleProgress(id) {
        dispatch({ type: "progress", id });
    }

    return (
        <div className="row">
            <div className="col-3">

                <ul className="list-group">
                    { tasks.map( task => (
                        <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                            { task.name } 
                            <div>
                                <Button className="btn" onClick={ () => toggleProgress(task.id) }>
                                    { task.inProgress ? <i className="bi bi-x-circle text-danger fs-5" /> : <i className="bi bi-check-square text-success fs-5" /> }
                                </Button>
                                <Button className="btn" onClick={ () => deleteTask(task) }>
                                    <Icon iconName="trash" />
                                </Button>
                            </div>
                        </li>
                    ) )}
                </ul>

            </div>
            <div className="col-9">
                <form onSubmit={addTask}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Ajouter une tache"
                            value={task} onChange={changeData} ref={input} />
                        <button className="btn btn-outline-secondary">Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    );
}