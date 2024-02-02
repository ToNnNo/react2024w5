import { Link, Outlet } from "react-router-dom";

export default function NestedRoute() {

    return (
        <>
            <h2>Routes imbriquées</h2>

            <h3>Créer votre devis en ligne</h3> 

            <nav className="nav">
                <Link className="nav-link" to="etape-1">Etape 1</Link>
                <Link className="nav-link" to="etape-2">Etape 2</Link>
                <Link className="nav-link" to="etape-3">Etape 3</Link>
            </nav>

            <Outlet />
        </>
    );

}