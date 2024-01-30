import { useState } from "react";

export default function LikeButton({ like = false }) {

    let [state, setState] = useState(like);
    let icon = (!state) ? "bi-heart" : "bi-heart-fill text-danger";

    function stateHandler() {
        setState(!state);
    }

    return (
        <button className="btn rounded-5" onClick={ stateHandler }>
            <i className={`fs-5 bi ${icon}`}></i>
        </button>
    );
}