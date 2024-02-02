import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import JsonPlaceholderDetailUser from "./JsonPlaceholderDetailUser";

export default function JsonPlaceholderWrapDetailUser() {
    console.log("JsonPlaceholderWrapDetailUser")

    const [user, setUser] = useState({});
    const params = useParams();

    const findUser = useCallback( async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await response.json();

        setUser(user);
    }, []);

    useEffect(() => {
        findUser(params.id);
    }, [findUser, params.id]);

    return (
        <>
            <div className="btn-group">
                <Link className="btn btn-outline-dark btn-sm" to={`/exercice/user/${+params.id - 1}`}>
                    <i className="bi bi-chevron-double-left" /> Prev
                </Link>
                <Link className="btn btn-outline-dark btn-sm" to={`/exercice/user/1`}>
                    User 1
                </Link>
                <Link className="btn btn-outline-dark btn-sm" to={`/exercice/user/${+params.id + 1}`}>
                    <i className="bi bi-chevron-double-right" /> Next
                </Link>
            </div>

            <JsonPlaceholderDetailUser user={user} />
        </>
    )
}
