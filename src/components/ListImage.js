import { useEffect, useState } from "react";

export default function ListImage() {

    const datas = [
        { id: 1, title: "Chien", img: "https://fastly.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o" },
        { id: 2, title: "Guépard", img: "https://fastly.picsum.photos/id/219/5000/3333.jpg?hmac=nQIYAD6CmzCXEG3xtEckzbu3iauIE3DpHiqnQy3gdG4" },
        { id: 3, title: "Pélican", img: "https://fastly.picsum.photos/id/244/4288/2848.jpg?hmac=R6j9PBP4aBk2vcEIoOPU4R_nuknizryn2Vq8GGtWTrM" },
    ];

    let [index, setIndex] = useState(1);
    let [data, setData] = useState({});

    useEffect(() => {
        let d = datas.find( value => value.id === index )
        setData(d);
    }, [index]);

    return (
        <>
            <div className="btn-group mb-3">
                <button className="btn btn-outline-dark" onClick={ () => setIndex(1) }>Chien</button>
                <button className="btn btn-outline-dark" onClick={ () => setIndex(2) }>Guépard</button>
                <button className="btn btn-outline-dark" onClick={ () => setIndex(3) }>Pélican</button>
            </div>

            <figure>
                <img src={data.img} alt="" className="img-fluid" />
                <figcaption>{data.title}</figcaption>
            </figure>
        </>
    );

}