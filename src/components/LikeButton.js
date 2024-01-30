export default function LikeButton({ state = false }) {

    let icon = (!state) ? "bi-heart" : "bi-heart-fill text-danger";
    
    return (
        <button className="btn rounded-5">
            <i className={`fs-5 bi ${icon}`}></i>
        </button>
    );
}