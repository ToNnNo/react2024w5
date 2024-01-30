import Button from "../components/Button/Button";
import Icon from "../components/Button/Icon";

export default function Composition() {

    return (
        <>
            <h1>La Composition</h1>

            <div className="mb-3">
                <Button onClick={ () => alert('coucou') } className="btn btn-outline-dark">
                    <Icon iconName="boxes" /> Cliquez ici  <Icon iconName="airplane" />
                </Button>
            </div>

            <div>
                <Button onClick={ () => alert("Bravo")} className="btn btn-outline-dark">
                    <Icon iconName="hand-thumbs-up" />
                </Button>
            </div>
        </>
    );
}