// import { formatNumber, formatCurrency } from "../filtres/intl";
import Welcome from "../components/Welcome";
import Youtube from "../components/Youtube";
import * as intl from "../filtres/intl";

export default function Presentation() {

    const name = "Stéphane";

    const html = "<script>alert('attaque !')</script>";

    // la variable client est safe
    const client = { __html: "<b>John Doe</b>" };

    // () grappe react
    return (
        <div>
            <h1>Bienvenue à notre formation React</h1>

            <div>
                <h2>Syntaxe de base</h2>

                <p>1 + 2 = {1 + 2}</p>
                <p>Bonjour {name}</p>

                <p>{ "Hello World" }</p>
                

                <hr />

                <p>Format Numérique JS : {intl.formatNumber(12345678.99)}</p>
                <p>Format Monétaire JS : {intl.formatCurrency(12345678.99)}</p>
            </div>

            <hr />
            <div>
                <h2>XSS</h2>

                <p>{ html }</p>

                <p dangerouslySetInnerHTML={client} />
            </div>

            <div>
                <h2>Les props</h2>

                <Welcome />

                {/* props avec une valeur String */}
                <Welcome name="Mickael" />

                {/* props avec une expression JS */}
                <Welcome name={name} lastname="Doe" />
            </div>

            <div>
                <h2>Exercice Youtube</h2>

                <p>
                    Créer un composant qui affiche une vidéo Youtube en passant 
                    en props le code de la vidéo 
                </p>

                <Youtube code="Ax0SoOMriVE" title="La dame de la cantoche à Nantes - Alban Ivanov" />

                <Youtube code="bz0Km93wSUc" title="SELLIG Réveillon chez ma soeur" />
            </div>
        </div>
    );
}