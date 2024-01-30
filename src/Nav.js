import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="nav">
            <Link to="/" className="nav-link">
                <i className="bi bi-house-fill text-black"></i>&nbsp;Accueil
            </Link>
            <Link to="/presentation" className="nav-link">Présentation</Link>
            <Link to="/conditions" className="nav-link">Les Conditions</Link>
            <Link to="/iterator" className="nav-link">Les Boucles</Link>
            <Link to="/event" className="nav-link">Les Evènements</Link>
            <Link to="/fragment" className="nav-link">Les Fragments</Link>
            <Link to="/style-asset" className="nav-link">Styles et assets</Link>
            <Link to="/exercice-video" className="nav-link">Exercice Vidéo</Link>
            <Link to="/local-state" className="nav-link">Etat Local</Link>
            <Link to="/composition" className="nav-link">Composition</Link>
        </nav>
    );
}