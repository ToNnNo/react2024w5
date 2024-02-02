import { useEffect, useState } from "react";

export default function Users() {

    const [users, setUsers] = useState([]);

    async function getUsers() {
        const response = await fetch('https://dummyjson.com/users?limit=10');
        const data = await response.json();

        setUsers(data.users);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <h1>Liste des utilisateurs</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>username</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map( user => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}