import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <>
            <h1>Oups !</h1>

            <p className="lead">La page que vous recherchez semble introuvable</p>

            <p>Vous souhaitez peut être revenir sur la page: </p>
            <ul className="unstyled">
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/presentation">Présentation</Link>
                </li>
                <li>
                    <Link to="/exercice/video">Vidéos</Link>
                </li>
            </ul>
        </>
    )
}