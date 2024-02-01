import { useState } from "react";

export default function UserForm() {

    const initialUser = { name: '', username: '', email: '', phone: '', fruit: '' };
    let [user, setUser] = useState(initialUser);
    let [success, setSuccess] = useState(false);

    function changeUser(e) {
        const input = e.target;

        user[input.name] = input.value;

        setUser({ ...user });
    }

    async function submit(e) {
        e.preventDefault();

        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if(response.ok) {
            const savedUser = await response.json();
            console.log(savedUser);

            setUser(initialUser);
            setSuccess(true);
        }
    } 

    return (
        <>
            { success && (
                <p className="text-success">L'utilisateur a bien été enregistré</p>
            )}
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" className="form-control" value={user.name} onChange={changeUser} />
                </div>
                <div className="mb-3">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" className="form-control" value={user.username} onChange={changeUser} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" className="form-control" value={user.email} onChange={changeUser} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" name="phone" id="phone" className="form-control" value={user.phone} onChange={changeUser} />
                </div>
                <div className="mb-3">
                    <label htmlFor="fruit">Fruit:</label>
                    <select name="fruit" id="fruit" className="form-control" value={user.fruit} onChange={changeUser}>
                        <option>Sélectionner un fruit</option>
                        <option value="apple">Pomme</option>
                        <option value="pear">Poire</option>
                        <option value="banana">Banane</option>
                    </select>
                </div>

                <button className="btn btn-outline-dark">Ajouter</button>
            </form>
        </>
    );

}