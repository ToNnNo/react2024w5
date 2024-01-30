export default function DataListElement({ data }) {

    return (
        <>
            <dt>{data.title}</dt>
            <dd>{data.description}</dd>
        </>
    );
}