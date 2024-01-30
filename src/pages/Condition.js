import DevMode from "../components/DevMode";

export default function Condition() {

    const isLoggedIn = true;

    let user;
    if(isLoggedIn) {
        user = { __html: "<p>Bonjour James</p>" }
    }

    const unread = ["Formation Dawan", "React", "Redux"];

    return (
        <div>
            <h1>Les conditions</h1>

            <DevMode show={false} />

            <h2>Condition avec structure if</h2>

            <div dangerouslySetInnerHTML={user} />

            <h2>Condition à la volée : Opérateur &&</h2>

            { isLoggedIn && <p>Bonjour James</p> }

            <h2>Opérateur ternaire</h2>
            
            { 
                unread.length > 0 ?
                `<p>Vous avez ${unread.length} nouveaux messages</p>` :
                <p>Aucun nouveau message</p>
            }
        </div>
    );
}