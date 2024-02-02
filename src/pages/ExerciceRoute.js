import { Link } from "react-router-dom";
import JsonPlaceholderWrapDetailUser from "../components/JsonPlaceholder/JsonPlaceholderWrapDetailUser";


export default function ExerciceRoute() {
    
    return (
        <>
            <h1>Exercice Route</h1>
            
            <div className="mb-3">
                <Link className="btn btn-outline-dark btn-sm" to="/exercice/hooks">
                    <i className="bi bi-arrow-left-short" /> Revenir à la liste
                </Link>
            </div>

            <JsonPlaceholderWrapDetailUser />
        </>
    );
}