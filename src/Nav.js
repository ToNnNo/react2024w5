import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="nav">
            <Link to="/" className="nav-link">
                <i className="bi bi-house-fill text-black"></i>&nbsp;Accueil
            </Link>
            <div className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Introduction</button>
                <ul className="dropdown-menu">
                    <li><Link to="/presentation" className="nav-link">Présentation</Link></li>
                    <li><Link to="/conditions" className="nav-link">Les Conditions</Link></li>
                    <li><Link to="/iterator" className="nav-link">Les Boucles</Link></li>
                    <li><Link to="/event" className="nav-link">Les Evènements</Link></li>
                    <li><Link to="/fragment" className="nav-link">Les Fragments</Link></li>
                </ul>
            </div>
            <Link to="/style-asset" className="nav-link">Styles et assets</Link>
            <Link to="/exercice/video" className="nav-link">Exercice Vidéo</Link>
            <Link to="/local-state" className="nav-link">Etat Local</Link>
            <Link to="/composition" className="nav-link">Composition</Link>
            <Link to="/life-cycle" className="nav-link">Cycle de vie (useEffet)</Link>
            <Link to="/exercice/hooks" className="nav-link">Exercice Hooks</Link>
            <Link to="/formulaire" className="nav-link">Formulaire</Link>
            <Link to="/reducer" className="nav-link">Hook Reducer</Link>
            <Link to="/exercice/todolist" className="nav-link">Exercie TodoList</Link>
            <Link to="/router" className="nav-link">React Router DOM</Link>
            <Link to="/router/nested" className="nav-link">Routes Imbriquées</Link>
            <Link to="/memo" className="nav-link">Hook Memo</Link>
            <Link to="/callback" className="nav-link">Hook Callback</Link>
            <Link to="/users" className="nav-link">Liste des utilisateurs</Link>
            <Link to="/redux" className="nav-link">Redux</Link>
            <Link to="/products" className="nav-link">Catalogue</Link>
        </nav>
    );
}