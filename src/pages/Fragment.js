import DataListElement from "../components/DataListElement";

export default function Fragment() {

    const datas = [
        { id: 1, title: "HTML", description: "HyperText Markup Language" },
        { id: 2, title: "CSS", description: "Cascading Style Sheets" },
        { id: 3, title: "JS", description: "JavaScript" },
    ]

    return (
        <>
            <h1>Les fragments</h1>

            <dl>
                {datas.map( data => <DataListElement key={data.id} data={data} />)}
            </dl>
        </>
    );
}