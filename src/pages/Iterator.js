export default function Iterator() {
    const fruits = ["Pomme", "Banane", "Kiwi", "Clémentine", "Orange"];

    /** 
     * const fruits [
     *  { id: 1, name: 'Pomme' },
     * ]
     */

    return (
        <div>
            <h1>Les Boucles</h1>

            <p>{fruits.join(', ')}</p>
            
            <ul>
                {fruits.map( (fruit, index) => <li key={index}>{fruit}</li>)}
            </ul>
        </div>
    );
}