export default function Youtube({ code, title = null }) {
    return (
        <div className="ratio ratio-16x9">
            <iframe src={`https://www.youtube.com/embed/${code}`} 
                className="rounded" title="YouTube video player" allowFullScreen></iframe>          
        </div>
    )
}