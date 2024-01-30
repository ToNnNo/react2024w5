export default function Event() {

    function handler() {
        alert('Bravo !');
    }

    function toggleDisplayHandler(event) {
        const btn = event.currentTarget;
        btn.innerText = btn.innerText === "Masquer" ? "Afficher": "Masquer";
        const id = btn.dataset.target;

        let target = document.querySelector(id);
        if(!target.style.display){
            target.style.display = "none";
        } else {
            target.style.display = null;
        }
    }

    return (
        <div>
            <h1>Les évènements</h1>
            <div className="mb-3">
                <button className="btn btn-outline-primary" onClick={handler}>
                    Cliquez ici pour déclencher notre 1er évènement</button>
            </div>

            <div className="mb-3">
                <button className="btn btn-outline-primary" onClick={() => alert('Hello World')}>
                    Cliquez ici pour déclencher notre 2nd évènement</button>
            </div>

            <div className="mb-3">
                <button className="btn btn-outline-primary" data-target="#target"
                    onClick={toggleDisplayHandler}>Masquer</button>

                <p id="target">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Purus ut faucibus pulvinar elementum 
                    integer enim neque volutpat ac. Nibh tortor id aliquet lectus proin nibh nisl. 
                    Dignissim convallis aenean et tortor at risus. Venenatis urna cursus eget nunc 
                    scelerisque viverra mauris in aliquam.</p>
            </div>

        </div>
    )
}