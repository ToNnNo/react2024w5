export default function DevMode({ show = true }) {

    if(!show) {
        return null;
    }

    return (
        <div className="text-info border border-info rounded p-1">
            <strong>(!) Info</strong> Vous êtes dans l'environnement de développement
        </div>
    )
}