import { useCallback, useEffect, useState } from "react";
import JsonPlaceholderDetailUser from "./JsonPlaceholderDetailUser";
import { Link } from "react-router-dom";

export default function JsonPlaceholderUser() {

    console.log("JsonPlaceholderUser");

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});

    const getUsers = useCallback(async () => {
        console.log("loading ...")
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response.json();

        setUsers(users);
    }, []);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <>
            <h2>Liste des utilisateurs</h2>

            <div className="row">
                <div className="col-3">

                    <div className="list-group">
                        { users.map( user => (
                            <button key={user.id} onClick={ () => { setUser(user) } }
                                type="button" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                {user.name}

                                <Link className="btn" to={"/exercice/user/"+user.id}>
                                    <i className="bi bi-box-arrow-up-right"></i>
                                </Link>
                            </button>
                        ))}
                    </div>

                </div>
                <div className="col-9">
                    <JsonPlaceholderDetailUser user={user} />
                </div>
            </div>
        </>    
    );
}