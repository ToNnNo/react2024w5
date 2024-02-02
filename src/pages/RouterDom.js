import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";

export default function RouterDom() {

    return (
        <>
            <h1>React Router DOM</h1>

            
            <nav className="nav">
                <Link className="nav-link" to="">Bienvenue</Link>
                <Link className="nav-link" to="react">React 18</Link>
                <Link className="nav-link" to="react15">React 15</Link>
            </nav>

            
            <h2>Routes Descendantes</h2>

            <Routes>
                <Route index element={<h3>Bienvenue sur React Router DOM</h3>} />
                <Route path="react" element={<h3>Formation React 18</h3>} />
                <Route path="react15" element={<Navigate to="/router/react" />} />
            </Routes>
            
        </>
    )
}