import { memo } from "react";

function JsonPlaceholderDetailUser({ user = {} }) {

    console.log("JsonPlaceholderDetailUser")

    if(Object.entries(user).length === 0){
        return null;
    }

    return (
        <>
            <h2>{user.name}</h2>

            <div className="row">
                <div className="col">
                    <h3 className="h4">Informations Personnelles</h3>
                    <table className="table">
                        <colgroup>
                        <col className="w-25" />
                        <col />
                        </colgroup>
                        <tbody>
                        <tr>
                            <th>Identifiant</th>
                            <td>{user.username}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <th>Téléphone</th>
                            <td>{user.phone}</td>
                        </tr>
                        <tr>
                            <th>Site Web</th>
                            <td>{user.website}</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div className="col">
                    <h3 className="h4">Entreprise</h3>
                    <table className="table">
                        <colgroup>
                        <col className="w-25" />
                        <col />
                        </colgroup>
                        <tbody>
                        <tr>
                            <th>Nom</th>
                            <td>{user.company.name}</td>
                        </tr>
                        <tr>
                            <th>Slogan</th>
                            <td>{user.company.catchPhrase}</td>
                        </tr>
                        <tr>
                            <th>Service</th>
                            <td>{user.company.bs}</td>
                        </tr>
                        </tbody>
                    </table>

                </div>

                <div>
                    <h3 className="h4">Adresse</h3>

                    <address>
                        {user.address.street} {user.address.suite} <br />
                        {user.address.city} {user.address.zipcode}
                    </address>
                </div>
            </div>
        </>
    );
}

// évite le rechargement du composant si la props ne change pas
// https://fr.react.dev/reference/react/memo
export default memo(JsonPlaceholderDetailUser);