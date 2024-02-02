import { useState } from "react";
import Icon from "../components/Button/Icon";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../slices/todoListSlice";

export default function Redux() {

    const [task, setTask] = useState('');

    const { tasks } = useSelector( state => state.todo );
    const dispatch = useDispatch();

    function addTask(e) {
        e.preventDefault();
        
        if( task.trim() !== '') {
            dispatch( add({ task }) );
            setTask('');
        }
    }

    return (
        <>
            <h1>Redux</h1>

            <h2>Todo List Redux <small>toolkit</small></h2>

            <div className="row">
                <div className="col-3">

                    <ul className="list-group">
                        { tasks.map( task => ( 
                            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                                { task.name }
                                <button className="btn" onClick={ () => dispatch( remove({ id: task.id }) )}>
                                    <Icon iconName="trash" />
                                </button>
                            </li>
                        )) }
                    </ul>

                </div>

                <div className="col-9">
                    <form onSubmit={addTask}>
                        <div className="input-group">
                            <input type="text" className="form-control" value={task} onChange={ (e) => setTask(e.target.value) } />
                            <button className="btn btn-outline-dark">Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}